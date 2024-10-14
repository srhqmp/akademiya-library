import dotenv from "dotenv";
import express from "express";

// routes
import userRoutes from "./routes/userRoutes.js";

// middlewares
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config({ path: ".env.local" });

console.log(process.env.PORT);

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => res.send("API running"));

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
