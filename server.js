const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const productRoutes = require("./routes/productRoutes");
app.use("/products", productRoutes);

// --- MongoDB connection ---
mongoose.connect("mongodb://127.0.0.1:27017/mern-pos")
    .then(() => {
        console.log("MongoDB Connected");

        // Define a schema & model here to initialize the DB
        const productSchema = new mongoose.Schema({
            name: String,
            price: Number,
            stock: Number
        });

        const Product = mongoose.model("Product", productSchema);

        // Insert a sample product (optional)
        Product.create({ name: "Sample Product", price: 100, stock: 10 })
            .then(doc => console.log("Initial product created:", doc))
            .catch(err => console.log(err));
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
