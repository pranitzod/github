const express=require("express")
const app=express();
const port=8000;

app.listen(port,() => {
    console.log('App is running');
})

app.get('/',(req,res) => {
    //res.send("<h2>Static node</h2>")
    res.sendFile(__dirname + "/index.html")
})