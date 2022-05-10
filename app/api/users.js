import client from "./client";

const getUsers = () =>
  client.post( "", {
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
