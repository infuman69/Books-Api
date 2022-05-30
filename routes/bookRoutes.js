const express = require('express')
const bookController = require('../controllers/bookController')

const router = express.Router();


router
    .route('/')
    .get(bookController.getallBooks)
    .post(bookController.createBook)

router
    .route('/:id')
    .get(bookController.getbookById)

module.exports = router;
