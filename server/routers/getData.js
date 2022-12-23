const express = require("express");
const getPost = require("../controllers/GetData/getUser.js");
const show = require("../controllers/GetData/show.js");
const getProjectSum = require("../controllers/ProjectProgress/getProjectSum.js");
const getProjectLoading = require("../controllers/ProjectProgress/getProjectLoading.js");
const getProjectDone = require("../controllers/ProjectProgress/getProjectDone.js");
const getEfficiency = require("../controllers/ProjectProgress/getEfficiency.js");
const getCountUser = require("../controllers/GetData/getCountUser.js");
const getUnPaid = require("../controllers/GetData/getUnPaid.js");
const getCountUserDay = require("../controllers/GetData/getCountUserDay.js");
const getSumSalary = require("../controllers/GetData/getSumSalary.js");
const getCountProjectSum = require("../controllers/GetData/getCountProjectSum.js");
const getCountProjectDone = require("../controllers/GetData/getCountProjectDone.js");
const getCountProjectLoading = require("../controllers/GetData/getCountProjectLoading.js");
const getAps = require("../controllers/GetData/getAps.js");
const getTsc = require("../controllers/GetData/getTsc.js");
const getAec = require("../controllers/GetData/getAec.js");
const getListUser = require("../controllers/GetData/getListUser.js")
const getInDay = require("../controllers/GetData/getInDay.js");
const getMachineId = require("../controllers/GetData/getMachineId.js");
const getPhase = require("../controllers/GetData/getPhase.js");
const getLine = require("../controllers/GetData/getLine.js");
const getLinePhase = require("../controllers/GetData/getLinePhase.js");

const routers = express.Router();

routers.get("/user", getPost);

routers.get("/getProjectSum", getProjectSum);

routers.get("/getProjectLoading", getProjectLoading);

routers.get("/getProjectDone", getProjectDone);

routers.get("/getEfficiency", getEfficiency);

routers.get("/getCountUser", getCountUser);

routers.get("/getUnPaid", getUnPaid);

routers.get("/getCountUserDay", getCountUserDay);

routers.get("/getSumSalary", getSumSalary);

routers.get("/CountProjectSum", getCountProjectSum);

routers.get("/CountProjectDone", getCountProjectDone);

routers.get("/CountProjectLoading", getCountProjectLoading);

routers.get("/show", show);

routers.get("/show/APS", getAps);

routers.get("/show/TSC", getTsc);

routers.get("/show/AEC", getAec);

routers.get("/machine/:id", getMachineId);

routers.get("/phase", getPhase);

routers.get("/line", getLine);

routers.get("/line/phase", getLinePhase);

routers.get("/listUser", getListUser);

routers.get("/getInDay", getInDay);


module.exports = routers;