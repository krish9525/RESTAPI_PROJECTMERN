import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  BookName: {
    type: String,
    required: true,
  },
  BookTile: {
    type: String,
    required: true,
  },
  Author : {
    type: String,
    required: true,
  },
  Price : {
    type: String,
    required: true,
  },
  PublishedDate : {
    type: Date,
  }
}, { timestamps: true });

const Book = mongoose.model("Books", bookSchema);

export default Book;
