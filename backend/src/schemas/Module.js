import { gql } from 'apollo-server-express';

export default gql`
  type Module {
    id: ID!
    name: String!
  }

  type Query {
    modules: [Module]
  }

  type Mutation {
    addModule(name: String!): Module
  }
`;
