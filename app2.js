const express = require("express")
const app = express()
const port = process.env.PORT || 3000;

const products_route = require("./routes/products")
// const connectDB = require("./db/connect")


app.get("/", (req, res) => {
    res.send("Hi, I am live server")
})

// middleware or to set router
app.use("/api/products", products_route)

const start = async () => {
    try{
        // await connectDB();
        
        app.listen(port, () => {
            console.log(`Listening on the server ${port}`)
        })
    } catch (error){
        console.log(error)
    }
}

start();

