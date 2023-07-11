const express = require("express")
const app = express()
require("dotenv").config()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello World, from Docker, this is a change")
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () =>{
    console.log(`Node JS app listening from http://localhost:${PORT}`)
})