import mongoose from "mongoose";

const orderScheme = new mongoose.Schema({
    orderNumber: String,
    items:
    {
        item: String,
        amount: Number
    },
    orderStatus: String,
    pickerToOrder: String,
    drivertoOrder: String,
});
export default mongoose.model("Orders", orderScheme);