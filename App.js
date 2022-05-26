import React, { useState } from "react";
import { Auth, Amplify } from "aws-amplify";
import AppLoading from "expo-app-loading";

import AuthContext from "./app/auth/context";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import config from "./src/aws-exports";

//Amplify configuration settings
Amplify.configure(config);
// Amplify.configure({
//   ...config,
//   Analytics: {
//     disabled: true,
//   },
// });

function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  //TODO what validates that the given JWT is valid/expired/etc.  How do I know that it has expired?

  const restoreToken = async () => {
    await Auth.currentAuthenticatedUser()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
        setUser();
      });
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={restoreToken}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {user ? <AppNavigator /> : <AuthNavigator />}            
    </AuthContext.Provider>
  );
}

export default App;
