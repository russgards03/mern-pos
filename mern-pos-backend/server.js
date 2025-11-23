const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// --- MongoDB connection ---
mongoose.connect("mongodb://127.0.0.1:27017/mern-pos")
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch(err => console.log(err));

// Default route
app.get("/", (req, res) => {
    res.send("Mini POS Backend is running.");
});

// Start server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
