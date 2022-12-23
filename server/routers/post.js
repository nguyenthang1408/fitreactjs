const express = require("express");
const addUser = require("../controllers/Postdata/addUser.js");
const updateUser = require("../controllers/UpdatePhase/updateUser.js");
const addMachine = require("../controllers/Postdata/addmachine.js");
const addPhase = require("../controllers/Postdata/addPhase.js");
const addLinePhase = require("../controllers/Postdata/addLinePhase.js");
const AddLine = require("../controllers/Postdata/addLine.js");
const postDayChange = require("../controllers/Postdata/addDayChange.js");


const routers = express.Router();



routers.post("/user/add", addUser);

routers.post("/user/update", updateUser);

routers.post("/machine/add", addMachine);

routers.post("/phase/add", addPhase);

routers.post("/line/add", AddLine);

routers.post("/phase/line/add", addLinePhase);

routers.post("/postDayChange", postDayChange);  




module.exports = routers;
