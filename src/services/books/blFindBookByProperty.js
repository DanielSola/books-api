import bookModel from 'models/book';

const blFindBookByProperty = async ({ property, value }) => {
  
  return bookModel.find({ [property]: value});
};

export default blFindBookByProperty;