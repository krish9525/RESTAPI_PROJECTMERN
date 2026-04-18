import express from "express";
import { handelBookListRequest, handleBookRequest  , handleDeleteRequest, handleUpdateRequest} from "../controller/book.controller.js";

const router = express.Router();

// Sample route for books
router.get("/books", (req, res) => {
  // Logic to fetch books from database can be added here and show listed books
  res.status(200).json({ message: "Books fetched successfully" });
  res.send(req.body.id);
});


// post books
router.post("/books", handleBookRequest);

// post book list

router.get("/booksList", handelBookListRequest);

// Delete book

router.delete("/deleteBook" , handleDeleteRequest)
//Update book
router.put("/updateBook" , handleUpdateRequest)

export default router;
