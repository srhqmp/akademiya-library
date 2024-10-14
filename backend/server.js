import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

// routes
import userRoutes from "./routes/userRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";

// middlewares
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config({ path: ".env.local" });

const PORT = process.env.PORT || 5000;
connectDB();

const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => res.send("API running"));

app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
