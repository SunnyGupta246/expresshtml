const path = require ('path');
const express = require("express");
const app = express();


console.log(__dirname);
const staticpath = path.join("__dirname","/page","page.html");
app.use(express.static(staticpath))
app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})