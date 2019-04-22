import MongoService from 'services/MongoService';
import bookModel from 'models/book';

const blSaveBook = async ({ book }) => {
  const savedBook = await MongoService.saveElement({ element: book, model: bookModel });

  return savedBook;
};

export default blSaveBook;
