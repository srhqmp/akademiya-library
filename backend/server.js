import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";

// routes
import userRoutes from "./routes/userRoutes.js";

// middlewares
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config({ path: ".env.local" });

const PORT = process.env.PORT || 5000;
connectDB();

const app = express();

app.get("/", (req, res) => res.send("API running"));

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
