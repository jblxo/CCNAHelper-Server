import typeDefs from "./types/types";
import Mutation from "./resolvers/Mutation";
import Query from "./resolvers/Query";
import {
    ApolloServer
} from 'apollo-server-express';

export default new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation
    }
});