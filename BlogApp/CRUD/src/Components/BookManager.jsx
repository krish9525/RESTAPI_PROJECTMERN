import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import "./BookManager.css";
// import instance from '../API/axios.jsx';
const BookManager = () => {
  const [books, setBooks] = useState({
    BookName: "",
    BookTile: "",
    Author: "",
    Price: "",
    PublishedDate: "",
  });

  const [bookList, setBookList] = useState([]);
  const [isUpdating , setIsUpdating] = useState(false);
  // Get all bookList

  const getBookList = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/booksList");
      setBookList(response.data.books);
    } catch (error) {
      console.error("Error fetching book list:", error);
    }
  };

  useEffect(() => {
    getBookList();
  }, []);

  const hangellChange = (e) => {
    setBooks({ ...books, [e.target.name]: e.target.value });
  };

  const handellSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (isUpdating) {
        await axios.put(
          "http://localhost:3000/api/updateBook",
          books
        );
  
        setIsUpdating(false);
      } else {
        await axios.post(
          "http://localhost:3000/api/books",
          books
        );
      }
  
      getBookList();
  
      setBooks({
        _id: "",
        BookName: "",
        BookTile: "",
        Author: "",
        Price: "",
        PublishedDate: "",
      });
  
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  

  // handell Delete Method

  const handelDelete = async (id) => {
    try {
      const res = await axios.delete(
        "http://localhost:3000/api/deleteBook",
        {
          data: { id: id }
        }
      );
      getBookList();

      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // handell Update Method
  const handellUpdate = (book) => {
    setBooks({
      _id: book._id,
      BookName: book.BookName,
      BookTile: book.BookTile,
      Author: book.Author,
      Price: book.Price,
      PublishedDate: book.PublishedDate,
    });
  
    setIsUpdating(true);
  };
  

// styles moved to BookManager.css

  return (
    <div className="bm-container">
      {/* Input Section */}
      <div className="bm-form-row">
        <div className="bm-input-group">
          <label className="bm-label">Book Name</label>
          <input
            type="text"
            placeholder="Book Name"
            className="bm-input"
            name="BookName"
            value={books.BookName}
            onChange={hangellChange}
          />
        </div>
        <div className="bm-input-group">
          <label className="bm-label">Book Title</label>
          <input
            type="text"
            placeholder="Book Title"
            className="bm-input"
            name="BookTile"
            value={books.BookTile}
            onChange={hangellChange}
          />
        </div>
        <div className="bm-input-group">
          <label className="bm-label">Author</label>
          <input
            type="text"
            placeholder="Author"
            className="bm-input"
            name="Author"
            value={books.Author}
            onChange={hangellChange}
          />
        </div>
        <div className="bm-input-group">
          <label className="bm-label">Selling Price</label>
          <input
            type="number"
            placeholder="Selling Price"
            className="bm-input"
            name="Price"
            value={books.Price}
            onChange={hangellChange}
          />
        </div>
        <div className="bm-input-group">
          <label className="bm-label">Publish Date</label>
          <input
            type="date"
            className="bm-input"
            name="PublishedDate"
            value={books.PublishedDate}
            onChange={hangellChange}
          />
        </div>
      </div>

      <div className="bm-form-actions">
      <button className="bm-submit-btn" onClick={handellSubmit}>
  {isUpdating ? "Update Book" : "Add Book"}
      </button>

      </div>

      {/* Table Section */}
      <table className="bm-table">
        <thead className="bm-thead">
          <tr>
            <th className="bm-th">Book Name</th>
            <th className="bm-th">Book Title</th>
            <th className="bm-th">Author</th>
            <th className="bm-th">Selling Price</th>
            <th className="bm-th">Publish Date</th>
            <th className="bm-th">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookList?.map((book, item) => {
            return (
              <tr key={item}>
                <td className="bm-td" data-label="Book Name">
                  {book?.BookName}
                </td>
                <td className="bm-td" data-label="Book Title">
                  {book?.BookTile}
                </td>
                <td className="bm-td" data-label="Author">
                  {book?.Author}
                </td>
                <td className="bm-td" data-label="Selling Price">
                  {book?.Price}
                </td>
                <td className="bm-td" data-label="Publish Date">
                  {book?.PublishedDate}
                </td>
                <td className="bm-td bm-actions" data-label="Action">
                  <MdDelete className="bm-icon-delete"
                  onClick={() => handelDelete(book._id)}
                  />{" "}
                  <FaEdit className="bm-icon-edit" 
                  onClick={
                    () => handellUpdate(book)
                  }
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BookManager;
