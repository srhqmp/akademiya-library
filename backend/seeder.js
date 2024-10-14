import mongoose from "mongoose";
import dotenv from "dotenv";

import booksData from "../data/books.json" assert { type: "json" };
import usersData from "../data/users.json" assert { type: "json" };
import Book from "./models/bookModel.js";
import User from "./models/userModel.js";

import connectDB from "./config/db.js";

dotenv.config({ path: ".env.local" });

const seedUsers = async () => {
  let count = 0;

  try {
    // Clear existing data
    await User.deleteMany();

    for (const user of usersData) {
      await User.create(user);
      count++;
    }

    console.log(`${count} users seeded successfully!`);
  } catch (error) {
    console.error("Error seeding users:", error);
    process.exit(1);
  }
};

const seedBooks = async () => {
  try {
    // Clear existing data
    await Book.deleteMany();

    const books = await Book.insertMany(booksData);
    console.log(`${books.length} books seeded successfully!`);
  } catch (error) {
    console.error("Error seeding books:", error);
    process.exit(1);
  }
};

const runSeeder = async () => {
  await connectDB();
  await seedUsers();
  await seedBooks();
  mongoose.connection.close(); // Close the connection
};

// Run the seeder
runSeeder().catch((error) => {
  console.error("Error in seeder:", error);
  process.exit(1);
});
