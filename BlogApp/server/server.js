import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import bookRoutes from "./routes/book.route.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

try {
  await connectDB();
  console.log("Connected to MongoDB");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
  process.exit(1);
}


app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
