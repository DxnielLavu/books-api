// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose

// schema
const bookSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String },
    year: { type: Number },
    quantity: { type: Number },
    imageURL: { type: String, default: 'https://placekitten.com/500/500' },
  }
)

// model and export 
const Book = mongoose.model('Book', bookSchema)
module.exports = Book
