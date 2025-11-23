const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

//GET products 
router.get("/", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

//ADD product
router.post("/", async (req, res) => {
    const { name, price } = req.body;

    try {
        const newProduct = await Product.create({ name, price });
        res.json(newProduct);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;