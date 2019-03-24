import { GraphQLServer } from "graphql-yoga";//playground가 있다
import resolvers from "./graphql/resolvers"

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers

});

server.start(()=>console.log("Graphql Server RUNNING"));