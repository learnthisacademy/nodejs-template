import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
   id_: String,
   name: String,
   quantityInventor: Number,
   price: Number
})

const productModel = mongoose.Model( "Product", productSchema )

export default productModel