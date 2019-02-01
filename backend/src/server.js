import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import typeDefs from './schema';
import Mutation from './resolvers/Mutation';
import Query from './resolvers/Query';
import Module from './models/Module';
import Question from './models/Question';

const MONGO_URL =
  process.env.MONGO_URL || 'mongodb://localhost:27017/ccnahelper';

const db = mongoose
  .connect(
    MONGO_URL,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => {
    throw new Error(err);
  });

export default new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation
  },
  context: ({ req }) => ({
    ...req,
    Module,
    Question
  })
});
