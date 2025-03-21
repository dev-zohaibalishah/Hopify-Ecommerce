import express from "express";
import dotenv from "dotenv"
import { connectDatabase } from "./config/dbConnect.js";

const app = express()

dotenv.config({path: "backend/config/config.env"})

//Connect to Database
connectDatabase()

app.use(express.json())

// Import all routes
import productRoutes from "./routes/products.js"
import { connectDatabase } from "./config/dbConnect.js";

app.use("/api/v1", productRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT} in ${process.env.NODE_ENV}mode.`)
})