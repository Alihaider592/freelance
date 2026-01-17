import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

connectDB();


app.use(cors());
app.use(express.json());


app.use("/api", authRoutes);


app.use(errorHandler);


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
