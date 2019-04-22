import blSaveAuthor from 'services/books/blSaveAuthor';

const saveAuthor = async ({ body: author }, res) => {
  try {
    const result = await blSaveAuthor({ author });

    res.status(200).json(result);
  } catch (e) {
    throw e;
  }
};

export default saveAuthor;