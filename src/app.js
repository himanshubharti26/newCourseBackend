const express = require('express');
const cors = require('cors');
const PORT = 8000;
const app = express();

app.use(cors({
    origin:"*",
}))

app.get("/",(req, res)=>{
    return res.status(200).send("Welcome to the new backend");
})
app.listen(PORT,(req, res)=>{
    console.log("server running on port:", PORT);
});