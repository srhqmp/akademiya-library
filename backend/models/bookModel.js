import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    imageUrl: { type: String },
    genre: { type: String },
    pages: { type: Number },
    description: { type: String },
    language: { type: String },
    year: { type: String },
    country: { type: String },
    borrowedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    }, // to track who borrowed the book
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
