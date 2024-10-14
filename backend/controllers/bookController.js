import asyncHandler from "express-async-handler";
import Book from "../models/bookModel.js";

// @desc    Get all books
// @route   GET /api/books
// @access  Public
const getAllBooks = asyncHandler(async (req, res) => {
  res.send("get all books");
});

// @desc    Get all available books
// @route   GET /api/books/available
// @access  Public
const getAvailableBooks = asyncHandler(async (req, res) => {
  res.send("get available books");
});

// @desc    Get specific book
// @route   GET /api/books/:id
// @access  Public
const getBook = asyncHandler(async (req, res) => {
  res.send("get book", req.params.id);
});

// @desc    Add new book
// @route   POST /api/books
// @access  Private
const addBook = asyncHandler(async (req, res) => {
  res.send("book added");
});

// @desc    Update a book
// @route   PUT /api/books/:id
// @access  Private
const updateBook = asyncHandler(async (req, res) => {
  res.send("book updated", req.params.id);
});

// @desc    Delete a book
// @route   DELETE /api/books/:id
// @access  Private
const deleteBook = asyncHandler(async (req, res) => {
  res.send("book updated", req.params.id);
});

// @desc    Borrow a book
// @route   POST /api/books/borrow/:id
// @access  Private
const borrowBook = asyncHandler(async (req, res) => {
  res.send("book borrowed", req.params.id);
});

// @desc    Borrow a book
// @route   POST /api/books/return/:id
// @access  Private
const returnBook = asyncHandler(async (req, res) => {
  res.send("book returned", req.params.id);
});

export {
  getAllBooks,
  getAvailableBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
  borrowBook,
  returnBook,
};
