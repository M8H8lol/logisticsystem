import express from "express";
import mongoose from "mongoose";
import Company from "./models/Company.js";
import Employee from "./models/Employee.js";
import Order from "./models/Order.js";
import Products from "./models/Products.js";
import Warehouse from "./models/Warehouse.js";

const app = express();

app.use(express.json());

app.get("/companies", async (req, res) => {
    const companies = await Company.find();
    res.json(companies);
});

app.post("/companies", async (req, res) => {
    try {
        await Company.create({
            companyName: req.body.companyName,
            wareHouseNames: req.body.wareHouseNames,
            amountOfWarehouses: req.body.amountOfWarehouses
        });
        res.status(200).send("Company added");
    }
    catch (err) {
        res.status(400).send("Error adding company!" + err);
    }
});


app.get("/employees", async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
});


app.post("/employees", async (req, res) => {
    try {
        await Employee.create({
            employeeName: req.body.employeeName,
            employeeAvailable: req.body.employeeAvailable,
            whichWarehouses: req.body.whichWarehouses,
            role: req.body.role
        });
        res.status(200).send("Employee added")
    } catch (err) {
        res.status(400).send("Error adding employee" + err);
    }
})

app.get("/orders", async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
});

app.get("/orders/:status", async (req, res) => {
    const orders = await Order.find({ orderStatus: req.params.status });
    if (orders == {}) {
        res.status(404).send("Orders not found")
    }
    res.json(orders);
})

app.post("/order", async (req, res) => {
    try {
        await Order.create({
            orderNumber: req.body.orderNumber,
            items: req.body.items,
            orderSatus: req.body.orderStatus,
            pickerToOrder: req.body.pickerToOrder,
            driverToOrder: req.body.driverToOrder,
        })
        res.status(200).send("Order added")
    } catch (err) {
        res.status(400).send("Error adding order" + err);
    }
})

// app.put("/order/:orderNumber", (req, res) => {
//     try {
//         Order.findByIdAndUpdate({(req.params.orderNumber)}, {
//             "items": req.body.items,
//             "orderSatus": req.body.orderStatus,
//             "pickerToOrder": req.body.pickerToOrder,
//             "driverToOrder": req.body.driverToOrder,
//         })
//     }
//     catch (err){
//         res.status(400).send("Error changing order" + err);
//     }
// })


app.get("/products", async (req, res) => {
    const products = await Products.find();
    res.json(products);
});

app.get("/products/:weekday", async (req, res) => {
    req.params.weekday
})

app.post("/products", async (req, res) => {
    try {
        await Products.create({
            name: req.body.name,
            price: req.body.price,
            weight: req.body.weight,
            shelfNumber: req.body.shelfNumber,
            available: req.body.available
        });
        res.status(200).send("Products added")
    } catch (error) {
        res.status(400).send("Error adding products")
    }
});

app.get("/warehouses", async (req, res) => {
    const warehouses = await Warehouse.find();
    res.json(warehouses);
});

app.post("/warehouses", async (req, res) => {
    try {
        await Warehouse.create({
            wareHouseName: req.body.wareHouseName,
            employees: req.body.employees,
            products: req.body.products
        })
        res.status(200).send("Warehouse added")
    } catch (error) {
        res.status(400).send("Error adding warehouse")
    }
})

async function getWorkingToday() {
    const workingToday = [];
    const today = new Date();
    const employees = await Employees.find();
    employees.forEach( (e) => {
        if (e.schedule[today.getDay()]) {
            workingToday.push(e);
        }
    });
}

app.listen(3030, () => {
    
    console.log("Server started at http://localhost:3030");
    mongoose.connect("mongodb://localhost/logistic").then(() => {
        // Company.create( { companyName: "The Cool Company" });
    });
    console.log("Mongooose connected to database...");
});

