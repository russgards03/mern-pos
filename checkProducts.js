const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/mern-pos")
  .then(async () => {
    console.log("MongoDB connected");

    // Define Product model
    const productSchema = new mongoose.Schema({
      name: String,
      price: Number,
      stock: Number
    });

    const Product = mongoose.model("Product", productSchema);

    // Fetch all products
    const products = await Product.find();
    console.log(products);

    // Close connection
    mongoose.disconnect();
  })
  .catch(err => console.log(err));
