import authorModel from 'models/author';

const blFindAuthorByProperty = async ({ property, value }) => {

  return authorModel.findOne({ [property]: value });
};

export default blFindAuthorByProperty;