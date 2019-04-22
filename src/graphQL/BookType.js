import FindAuthorByProperty from 'services/books/blFindAuthorByProperty';
import AuthorType from 'graphQL/AuthorType';
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} from 'graphql';

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLString) 
    },
    author: {
      type: new GraphQLNonNull(GraphQLString)
    },
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    genre: {
      type: new GraphQLNonNull(GraphQLString)
    },
    year: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    authorInfo: {
      type: AuthorType,
      resolve: async (book) => {
        const author = await FindAuthorByProperty({ property: 'name', value: book.author });

        return author;
      }
    }
  }
});

export default BookType;