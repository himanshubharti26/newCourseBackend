const userRouter = require('express').Router();
const userController = require("../controllers/userController");

userRouter.get("/user/:id", userController.getUserById)
.post("/user", userController.createUser)
.put("/user", userController.updateUser);

module.exports = userRouter;