import mongoose from "mongoose"

const employeeScheme = new mongoose.Schema({
    employeeName: String,
    employeeAvailable: Boolean,
    whichWarehouses: String,
    role: [String]
});
export default mongoose.model("Employees", employeeScheme);
