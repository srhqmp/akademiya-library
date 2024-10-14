import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    imageUrl: { type: String, default: null },
    genre: { type: String, default: null },
    pages: { type: Number, default: null },
    description: { type: String, default: null },
    language: { type: String, default: null },
    year: { type: String, default: null },
    country: { type: String, default: null },
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
