import express from 'express';
import {saveBook, getBookByProperty} from 'handlers';

const router = new express.Router();

router
  .route('/')
  .post(saveBook);

router
  .route('/:property/:value')
  .get(getBookByProperty);


export default router;