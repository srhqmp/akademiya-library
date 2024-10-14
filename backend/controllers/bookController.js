import asyncHandler from "express-async-handler";
import Book from "../models/bookModel.js";
import User from "../models/userModel.js";

// @desc    Get all books
// @route   GET /api/books
// @access  Public
const getAllBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({});
  res.json(books);
});

// @desc    Get all available books
// @route   GET /api/books/available
// @access  Public
const getAvailableBooks = asyncHandler(async (req, res) => {
  const availableBooks = await Book.find({
    borrowedBy: { $eq: null },
  });
  res.json(availableBooks);
});

// @desc    Get specific book
// @route   GET /api/books/:id
// @access  Public
const getBook = asyncHandler(async (req, res) => {
  const book = await Book.findOne({ _id: req.params.id });
  res.json(await book.populate("borrowedBy"));
});

// @desc    Add new book
// @route   POST /api/books
// @access  Private
const addBook = asyncHandler(async (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    res.status(400);
    throw new Error("Please complete all required fields. (title, author)");
  }

  const book = await Book.create({
    title,
    author,
    genre: req.body.genre || null,
    pages: req.body.pages || null,
    description: req.body.description || null,
    language: req.body.language || null,
    year: req.body.year || null,
    country: req.body.country || null,
  });

  res.status(201).json(book);
});

// @desc    Update a book
// @route   PUT /api/books/:id
// @access  Private
const updateBook = asyncHandler(async (req, res) => {
  const book = await Book.findOne({ _id: req.params.id });

  if (book) {
    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;
    book.imageUrl = req.body.imageUrl || book.imageUrl;
    book.genre = req.body.genre || book.genre;
    book.pages = req.body.pages || book.pages;
    book.description = req.body.description || book.description;
    book.language = req.body.language || book.language;
    book.year = req.body.year || book.year;
    book.country = req.body.country || book.country;
    book.borrowedBy = book.borrowedBy;

    const updatedBook = await book.save();
    res.json(updatedBook);
  } else {
    res.status(404);
    throw new Error("Book not found");
  }
});

// @desc    Delete a book
// @route   DELETE /api/books/:id
// @access  Private
const deleteBook = asyncHandler(async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.status(200);
  res.json({
    message: "Book removed successfully",
    id: req.params.id,
  });
});

// @desc    Borrow a book
// @route   POST /api/books/borrow/:id
// @access  Private
const borrowBook = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const book = await Book.findById(req.params.id);

  if (!book) {
    res.status(404);
    throw new Error("Book not found");
  }

  // Check if the book is already borrowed
  if (book.borrowedBy) {
    res.status(400);
    throw new Error(`This book ${book._id} is not available to borrow.`);
  }

  // Borrow book
  book.borrowedBy = user._id;
  const updatedBook = await book.save();

  // Update user's borrowed books list
  user.borrowedBooks.push({ book: book._id, borrowDate: new Date() });
  await user.save();

  res
    .status(200)
    .json(await Book.findById(updatedBook._id).populate("borrowedBy"));
});

// @desc    Borrow a book
// @route   POST /api/books/return/:id
// @access  Private
const returnBook = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const book = await Book.findById(req.params.id);

  if (!book) {
    res.status(404);
    throw new Error("Book not found");
  }

  // Check if the book is borrowed by the user
  if (
    book.borrowedBy === null ||
    book.borrowedBy.toString() !== user._id.toString()
  ) {
    res
      .status(400)
      .json({
        message: `You cannot return this book ${book._id} because it was not borrowed by you.`,
      });
    return;
  }

  book.borrowedBy = null;
  await book.save();

  user.borrowedBooks = user.borrowedBooks.map((borrowed) =>
    borrowed.book.toString() === book._id.toString()
      ? { ...borrowed, isReturned: true, dateReturned: new Date() }
      : borrowed
  );

  await user.save();
  res
    .status(200)
    .json({ message: `You have successfully returned the book ${book._id}.` });
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
