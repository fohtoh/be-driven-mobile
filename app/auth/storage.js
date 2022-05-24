// // import * as SecureStore from 'expo-secure-store';

// const key = "authToken";

// const storeToken = async(authToken) => {
// console.log("🚀 ~ file: storage.js ~ line 6 ~ storeToken ~ authToken", authToken)
//   try {
//     await SecureStore.setItemAsync(key, authToken);    
//   } catch (error) {
//     console.log('error storing authToken', error);
//   }
// }

// const getToken = async () => {
//   try {
//     return await SecureStore.getItemAsync(key);    
//   } catch (error) {
//     console.log('error getting authToken', error);
//   }
// }

// const removeToken = async () => {
//   try {    
//     await SecureStore.deleteItemAsync(key);
//   } catch (error) {
//     console.log('Error removing the auth token', error);
//   }
// }

// export default {getToken, removeToken, storeToken};