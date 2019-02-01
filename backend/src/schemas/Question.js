import { gql } from 'apollo-server-express';

export default gql`
  type Question {
    id: ID!
    body: String!
    module: Module
  }

  type Query {
    questions: [Question]
  }

  type Mutation {
    addQuestion(body: String!, module: String!): Question
  }
`;
