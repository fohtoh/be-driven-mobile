import client from "./client";

const endpoint = "/users";

const getUsers = () =>
  client.post(endpoint, {
    headers: { "Content-Type": "application/json" },
    query: `query  {
          users{
            id
            name
          } 
        }
    `,
  });

export default {
  getUsers,
};
