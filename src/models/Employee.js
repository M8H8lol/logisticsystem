import mongoose from "mongoose"

const employeeScheme = new mongoose.Schema({
    employeeAvailable: Boolean,
    whichWarehouses: [String],
    role: [String]
});
export default mongoose.model("Employees", employeeScheme);
