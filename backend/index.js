// entry point
const connectToMongoo = require('./db');
const express = require('express')
connectToMongoo();

const app=express();
const port=3000

app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.listen(port,()=>{
    console.log(`Exapmle app listing at http://localhost:${port}`)
})