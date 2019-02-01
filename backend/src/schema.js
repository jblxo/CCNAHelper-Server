import { mergeTypes } from 'merge-graphql-schemas';
import Module from './schemas/Module';
import Question from './schemas/Question';

const typeDefs = [Module, Question];

export default mergeTypes(typeDefs, {
  all: true
});
