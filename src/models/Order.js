import mongoose from "mongoose";

const orderScheme = new mongoose.Schema({
    orderNumber: Number,
    orderStatus: String,
    items:
        [{
            name: String,
            amount: Number,
            pickerToOrder: String,
            driverToOrder: String
        }],
});
export default mongoose.model("Orders", orderScheme);