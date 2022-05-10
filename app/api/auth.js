import client from "./client";

const doLogin = (email, password) =>
  client.post("", {
    headers: { "Content-Type": "application/json" },
    query: `mutation SIGNIN_MUTATION($email: String!, $password: String!){
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }`,
    variables: {
      email,
      password,
    },
  });

export default {
  doLogin, 
};
