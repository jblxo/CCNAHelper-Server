import {
    makeExecutableSchema
} from "graphql-tools";

import typeDefs from "./types/types";
import Mutation from "./resolvers/Mutation";
import Query from "./resolvers/Query";

const schema = makeExecutableSchema({
    typeDefs,
    resolvers: {
        Mutation,
        Query
    }
});

export default schema;