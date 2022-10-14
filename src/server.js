import express from "express";
import mongoose from "mongoose";
import Company from "./models/Company.js";
import Employee from "./models/Employee.js";
import Order from "./models/Order.js";
import OrderItem from "./models/OrderItem.js";
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

app.post("/orders", async (req, res) => {
    try {
        await Order.create({
            orderNumber: req.body.orderNumber,
            items: {
                item: req.body.item,
                amount: req.body.amount,
            },
            ordersSatus: req.body.orderStatus,
            pickerToOrder: req.body.pickerToOrder,
            drivertoOrder: req.body.drivertoOrder,
        })
        res.status(200).send("Order added")
    } catch (err) {
        res.status(400).send("Error adding employee" + err);
    }
})

app.get("/orderItem", async (req, res) => {
    const orderItem = await OrderItem.find();
    res.json(orderItem);
});

app.post("/orderItems", async (req, res) => {
    try {
        await OrderItem.create({
            product: req.body.product,
            amount: req.body.amount,
        })
        res.status(200).send("Order items added")
    } catch (error) {
        res.status(400).send("Error adding order items");
    }
})

app.get("/products", async (req, res) => {
    const products = await Products.find();
    res.json(products);
});

app.post("/products", async (req, res) => {
    try {
        await Products.create({
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productWeight: req.body.productWeight,
            shelfNumber: req.body.shelfNumber,
            productAvailable: req.body.productAvailable
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
            warehouseName: req.body.warehouseName,
            employees: req.body.employees,
            products: req.body.products
        })
        res.status(200).send("Warehouse added")
    } catch (error) {
        res.status(400).send("Error adding warehouse")
    }
})


app.listen(3030, () => {
    console.log("Server started at http://localhost:3030");
    mongoose.connect("mongodb://localhost/logistic").then(() => {
        // Company.create( { companyName: "The Cool Company" });
    });
    console.log("Mongooose connected to database...");
});

