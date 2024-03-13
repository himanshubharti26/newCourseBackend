const userRouter = require('express').Router();
const userController = require("../controllers/userController");

userRouter.get("/:id", userController.getUserById)
.post("/", userController.createUser)
.put("/", userController.updateUser);

module.exports = userRouter;