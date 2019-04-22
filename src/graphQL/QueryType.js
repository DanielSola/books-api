import blFindBookByProperty from 'services/books/blFindBookByProperty';
import BookType from 'graphQL/BookType';
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
} from 'graphql';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    book: {
      type: new GraphQLList(BookType),
      args: {
        property: {
          type: new GraphQLNonNull(GraphQLString)
        },
        value: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: async (user, args) => {
        const books = await blFindBookByProperty({ [args.property]: args.value });
        return books;
      }
    }
  }
});

export default QueryType;