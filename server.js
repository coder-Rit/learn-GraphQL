// const app = require('./app')
 
const {ApolloServer} = require('apollo-server');
const {typeDefs} = require('./schema/typeDefs');
const {resolvers} = require('./schema/resolvers');
// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/config.env" });
}


const server = new ApolloServer({typeDefs,resolvers})
 
  

// server code
server.listen().then(({url})=>{
  console.log(`server is runing at ${url}`);
})

  