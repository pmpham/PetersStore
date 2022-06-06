const express = require("express");
const router = express.Router();

const {getAllProducts, getProductById} = require("../controller/productControllers")
//@desc get all products from db
//@route get /api/products
//@access Public
router.get("/",getAllProducts);

//@desc get a product by id from db
//@route get /api/products
//@access Public
router.get("/:id",getProductById);

module.exports= router;