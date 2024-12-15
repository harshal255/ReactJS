const express = require('express');
const route = express.Router();
const { addUser, updateUser, deleteUser, getUsers } = require('../controllers/user.controller');

route.get("/user-lists", getUsers);
route.post("/add-user", addUser);
route.put("/update-user/:id", updateUser);
route.delete("/delete-user/:id", deleteUser);

module.exports = route;