import blFindBookByProperty from 'services/books/blFindBookByProperty';

const getBookByProperty = async ({ params: { property, value } }, res) => {
  try {
    const result = await blFindBookByProperty({ property, value });
    
    res.status(200).json(result);
  } catch (e) {
    throw e;
  }
};

export default getBookByProperty;