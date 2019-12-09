import express from 'express';
import { saveAuthor, getAuthorByProperty } from 'handlers';

const router = new express.Router();

router
  .route('/')
  .post(saveAuthor);

router
  .route('/:property/:value')
  .get(getAuthorByProperty);

export default router;