import MongoService from 'services/MongoService';
import authorModel from 'models/author';

const blSaveAuthor = async ({ author }) => {
  const savedAuthor = await MongoService.saveElement({ element: author, model: authorModel });

  return savedAuthor;
};

export default blSaveAuthor;