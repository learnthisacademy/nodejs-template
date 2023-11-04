import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
   name: String,
   quantityInventor: Number,
   price: Number
})

const productModel = mongoose.Model( "Product", productSchema )

export default productModel