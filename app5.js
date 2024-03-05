require("dotenv").config();
const express = require("express")
const app = express()
const connectDB = require("./db/connect1")

const port = process.env.PORT || 3000;

const products_route = require("./routes/products1");
const products = require("./models/products");


app.get("/", (req, res) => {
    res.send("Hi, I am live server")
})

// middleware or to set router
app.use("/api/products", products_route)

const start = async () => {
    try{
       await connectDB(process.env.MONGODB_URL);     
        app.listen(port, () => {
            console.log(`Listening on the server ${port}`)
        })
    } catch (error){
        console.log(error)
    }
}

start();










// require("dotenv").config();
// const connectDB = require("./db/connect1")
// const Product = require("./models/products");

// const ProductJson = require("./products.json")


// const start = async () => {
//     try{
// await connectDB(process.env.MONGODB_URL)
// await Product.create(ProductJson)
// console.log("Connection successful...")
//     } catch(error){
// console.log(error)
//     }
// }

// start()
