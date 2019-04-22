import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} from 'graphql';

const AuthorType = new GraphQLObjectType({ 
  name: 'Author',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLString) 
    },
    name: {
      type: new GraphQLNonNull(GraphQLString) 
    },
    origin: {
      type: new GraphQLNonNull(GraphQLString)
    },
    gender: {
      type: new GraphQLNonNull(GraphQLString)
    },
    age: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  }
});

export default AuthorType;