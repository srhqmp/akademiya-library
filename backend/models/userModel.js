import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const borrowedBookSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
  borrowDate: { type: Date, default: Date.now },
  returnDate: { type: Date, default: null },
  isReturned: { type: Boolean, default: false },
  dateReturned: { type: Date, default: null },
});

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["admin", "student"],
      required: true,
      default: "student",
    },
    password: {
      type: String,
      required: true,
    },
    borrowedBooks: [borrowedBookSchema],
  },
  {
    timestamps: true,
  }
);

// Calculate returnDate as 10 days after borrowDate
borrowedBookSchema.pre("save", function (next) {
  if (!this.returnDate) {
    const returnDate = new Date(this.borrowDate);
    returnDate.setDate(this.borrowDate.getDate() + 10);
    this.returnDate = returnDate;
  }
  next();
});

// Encrypt password using bcrypt
userSchema.pre("save", async function (next) {
  // If the password has not been modified, skip hashing
  if (!this.isModified("password")) {
    next();
  }

  // If the password is modified, hash it
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
