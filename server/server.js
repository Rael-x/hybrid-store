const colors = require("colors");
const fs = require("fs");
const mysql = require("mysql");
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res)=>{
    res.json({message: "Hello from Hybrid server."})
})

app.listen(PORT, ()=> {
    console.clear();
    console.log("Connection successful.".blue);
    console.log("");
    console.log("Server is listening on PORT 3001.".green);
})