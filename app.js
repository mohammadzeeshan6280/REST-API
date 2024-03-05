const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hi, I am live server");
})

const start = async () => {
    try{
        app.listen(port, () => {
            console.log(`Listening on the server ${port}`)
        })
    } catch (error){
        console.log(error)
    }
}

start();