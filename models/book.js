const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please give a bookname'],
        unique:true
    },
    author:{
        type:String,
        required:[true,'Books must have a author name']
    },
    description:{
        type:String,
    },
    genre:{
        type:String,
        required:[true,'Books must have a genre']
    },
    price:{
        type:Number,
        required:['true',"Books must have a price"]
    },
    rating:{
        type:Number
    }
})

const Book = mongoose.model('Book',bookSchema)

module.exports = Book