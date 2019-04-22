import blFindAuthorByProperty from 'services/books/blFindAuthorByProperty';

const getAuthorByProperty = async ({ params: { property, value } }, res) => {
  try {
    const result = await blFindAuthorByProperty({ property, value });
    
    res.status(200).json(result);
  } catch (e) {
    throw e;
  }
};

export default getAuthorByProperty;