import mongoose from "mongoose"

const companyScheme = new mongoose.Schema({
    wareHouseNames: [String],
    amountOfWarehouses: Number,
    companyName: String,
});
export default mongoose.model("Company", companyScheme);