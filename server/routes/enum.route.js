const express = require('express');
const { getEnums, addEnum } = require('../controllers/enum.controller');
const route = express.Router();

route.get("/enum-lists", getEnums);
route.post("/add-enum", addEnum);

module.exports = route;