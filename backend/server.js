import dotenv from "dotenv";
import express from "express";
import userRoutes from "./routes/userRoutes.js";

dotenv.config({ path: ".env.local" });

console.log(process.env.PORT);

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => res.send("API running"));

app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
