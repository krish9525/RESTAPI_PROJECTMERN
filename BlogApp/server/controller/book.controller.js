
import Book from "../model/book.model.js";

export  const handleBookRequest = (req, res) => {
  try{
    const { BookName, BookTile, Author, Price, PublishedDate } = req.body;
    if (!BookName || !BookTile || !Author || !Price) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newBook = new Book({
      BookName,
      BookTile,
      Author,
      Price,
      PublishedDate
    });
    newBook.save()
      .then(() => res.status(201).json({ message: "Book added successfully" }))
      .catch((error) => res.status(500).json({ message: "Error adding book", error })  
      );
      
  }catch(error){
    res.status(500).json({ message: "Server Error" });
  }
};

export const handelBookListRequest = async (req , res) => {

  try{
    const books =  await Book.find();
    res.status(200).json(
      { message: "Books fetched successfully", 
        TotalCount : books.length ,
       books  : books
      }
    );

  }catch(error){
    res.status(500).json({ message: "Server Error" });
  }
};

export const handleDeleteRequest = async (req, res) => {
  try {
    const { id } = req.body;

    const deleted = await Book.deleteOne({ _id: id });

    if (deleted.deletedCount === 0) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.status(200).json({
      message: "Book deleted successfully",
    });

  } catch (error) {
    return res.status(500).json({
      message: "Error in deletion",
      error: error.message,
    });
  }
};

export const handleUpdateRequest = async (req , res) => {
  const body = req.body;
  const updateBook = await Book.updateOne({_id : body?._id } , {$set : body})
  if(updateBook.acknowledged){
    res.status(200).json(
      {
        massage : "Book Update sussesfully"
      }
    )
  }
  else{
    res.status(400).json(
      {
        massage : "Book Update failed"
      }
    )
  }
}

