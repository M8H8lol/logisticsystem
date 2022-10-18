import mongoose from "mongoose"

const productsScheme = new mongoose.Schema({
    productName: String,
    productPrice: Number,
    productWhere: String,
    productWeight: Number,
    shelfNumber: Number,
    productAvailable: Boolean,
});
export default mongoose.model("Products", productsScheme);