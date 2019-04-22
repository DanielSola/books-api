import blSaveBook from 'services/books/blSaveBook';

const saveBook = async ({ body: book }, res) => {
  try {
    const result = await blSaveBook({ book });

    res.status(200).json(result);
  } catch (e) {
    throw e;
  }
};

export default saveBook;