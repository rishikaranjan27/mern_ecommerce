import express from "express";
import Product from "../Models/productModel.js";
import User from "../Models/userModel.js";
import data from '../Data.js';



const seedRouter = express.Router();



seedRouter.get('/', async(req, res) => {

    await Product.remove({});

    const createdProducts = await Product.insertMany(data.products);


    await User.remove({});

    const createdUsers = await User.insertMany(data.users);

    res.send({createdProducts, createdUsers});

});




export default seedRouter;