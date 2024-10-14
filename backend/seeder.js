import mongoose from "mongoose";
import dotenv from "dotenv";
import booksData from "../data/books.json" assert { type: "json" };
import Book from "./models/bookModel.js";
import connectDB from "./config/db.js";

dotenv.config({ path: ".env.local" });

const seedBooks = async () => {
  await connectDB();

  try {
    // Clear existing data
    await Book.deleteMany();

    // Insert new data
    const books = await Book.insertMany(booksData);
    console.log(`${books.length} books seeded successfully!`);

    // Close the connection
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding books:", error);
    process.exit(1);
  }
};

// Run the seeder
seedBooks();
