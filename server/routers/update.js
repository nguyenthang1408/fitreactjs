const express = require("express");

const editPhase = require("../controllers/UpdatePhase/editPhase.js");
const updateLinePhase = require("../controllers/UpdatePhase/updateLinePhase.js");
const updateLinePhaseFinish = require("../controllers/UpdatePhase/updateLinePhaseFinish.js");
const updateLinePhaseInDay = require("../controllers/UpdatePhase/updateLinePhaseInDay.js");
const updatePhaseFinish = require("../controllers/UpdatePhase/updatePhaseFinish.js");
const updatePhaseInDay = require("../controllers/UpdatePhase/updatePhaseInDay.js");
const updatePaid = require("../controllers/UpdatePhase/updatePaid.js");

const routers = express.Router();

routers.put("/phase/edit", editPhase);

routers.put("/phase/line/update", updateLinePhase);

routers.put("/phase/line/finish", updateLinePhaseFinish);

routers.put("/phase/line/inDay", updateLinePhaseInDay);

routers.put("/phase/inDay", updatePhaseInDay);

routers.put("/phase/finish", updatePhaseFinish);

routers.put("/updatePaid", updatePaid);

module.exports = routers;