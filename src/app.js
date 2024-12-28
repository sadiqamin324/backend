import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Use CORS origin from the .env file
    credentials: true, // Allow credentials (cookies, etc.)
}));
app.use(express.json({ limit: "16kb" })); // Body parser for JSON with size limit
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // URL-encoded data parser
app.use(express.static("public")); // Serve static files from 'public' directory
app.use(cookieParser()); // Parse cookies

// Routes import
import userRouter from './routes/user.routes.js';

// Routes declaration
app.use("/api/v1/users", userRouter); // Base route for user-related routes

// Error handling middleware


export {app}
