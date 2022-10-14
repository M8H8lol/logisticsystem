import mongoose from "mongoose"

const orderItemScheme = new mongoose.Schema({
    product: String,
    amount: Number
});
export default mongoose.model("OrderItem", orderItemScheme);
