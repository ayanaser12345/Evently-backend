require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")

// Import routes
const authRoutes = require("./routes/auth")
const eventRoutes = require("./routes/events")
const userRoutes = require("./routes/users")
const commentRoutes = require("./routes/comments")

// Create Express app
const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/events", eventRoutes)
app.use("/api/users", userRoutes)
app.use("/api/comments", commentRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    success: false,
    message: "Server Error",
    error: process.env.NODE_ENV === "development" ? err.message : "An unexpected error occurred",
  })
})

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/evently")
    console.log("MongoDB connected successfully")
  } catch (error) {
    console.error("MongoDB connection error:", error.message)
    process.exit(1)
  }
}

connectDB()

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = app // For testing
