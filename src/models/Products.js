import mongoose from "mongoose"

const productsScheme = new mongoose.Schema({
    name: String,
    price: Number,
    weight: Number,
    shelfNumber: Number,
    available: Boolean,
});
export default mongoose.model("Products", productsScheme);