const Book = require('../models/book')


// Retrieves all Books
exports.getallBooks = async(req,res) => {
    try{
        const books = await Book.find()// Returns a promise so we should await it
        res.status(200).json({
            status:'success',
            data:books,
        })

    } catch(err){
        res.status(201).json({
            status:'fail',
            message:err
        })
    }
}

// Get a Particular Book by Id
exports.getbookById = async (req,res) => {
    try{
       
        const book = await Book.findById(req.params.id)// Returns a promise so we should await it
        
        res.status(200).json({
            status:"success",
            data:{
                book
            }
        })
    }catch(err) {
        res.status(201).json({
            status:"fail",
            message:err
        })
    }
}


// Post a Book
exports.createBook = async(req,res) => {
    try{
        const newBook = await Book.create(req.body)// Returns a promise so we should await it

        res.status(200).json({
            status: 'success' ,
            data: {
                book: newBook
            }
        })
    } catch(err) {
        res.status(400).json({
            status:'fail',
            message: err,
        })
    }
}