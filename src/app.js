const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/userRoute');
const courseRouter = require('./routes/courseRoute');
const enrollRouter = require('./routes/userCourseRoute');
const PORT = 8000;
const app = express();
const db = require("./db/db");

app.use(cors({
    origin:"*",
}))
db();
app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/enroll", enrollRouter)


app.get("/",(req, res)=>{
    return res.status(200).send("Welcome to the new backend");
})
app.listen(PORT,(req, res)=>{
    console.log("server running on port:", PORT);
});