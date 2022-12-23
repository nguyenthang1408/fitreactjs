const express = require("express");


const deleteUser = require("../controllers/DeleteData/deleteUser.js");
const deleteLinePhase = require("../controllers/DeleteData/deleteLinePhase.js");
const deletePhase = require("../controllers/DeleteData/deletePhase.js");
const deletePaidDay = require("../controllers/DeleteData/deletePaidDay.js");

const routers = express.Router();


routers.delete("/user/delete/:id", deleteUser);

routers.delete("/phase/delete/:id", deletePhase);

routers.delete("/phase/line/delete/:id", deleteLinePhase);

routers.delete("/deletePaidDay/:id", deletePaidDay);

module.exports = routers;