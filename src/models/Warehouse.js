import mongoose from "mongoose"

const warehouseScheme = new mongoose.Schema({
    wareHouseName: String,
    employees: [String],
    products: [String]
});
export default mongoose.model("Warehouse", warehouseScheme);