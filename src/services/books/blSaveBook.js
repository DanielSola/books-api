import MongoService from 'services/MongoService';

const blSaveBook = async ({ book = {} }) => {
  const savedBook = await MongoService.saveBook({book});

  return savedBook;
};

export default blSaveBook;
