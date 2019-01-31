import { mergeTypes } from 'merge-graphql-schemas';
import Module from './schemas/Module';

const typeDefs = [Module];

export default mergeTypes(typeDefs, {
  all: true
});
