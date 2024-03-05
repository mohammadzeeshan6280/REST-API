require("dotenv").config();
const connectDB = require("./db/connect1") // database connect
const Product = require("./models/products"); // model connect

const ProductJson = require("./products.json") // json data connect


const start = async () => {
    try{
await connectDB(process.env.MONGODB_URL)
await Product.deleteMany(); // delete all data
await Product.create(ProductJson)
console.log("Connection successful...")
    } catch(error){
console.log(error)
    }
}

start()
