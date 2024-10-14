import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    imageUrl: { type: String, required: true },
    genres: [{ type: String }],
    description: { type: String },
    datePublished: { type: Date },
    borrowedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // to track who borrowed the book
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
