const express = require("express");
const getPost = require("../controllers/getUser.js");
const addUser = require("../controllers/addUser.js");
const getAps = require("../controllers/getAps.js");
const getTsc = require("../controllers/getTsc.js");
const getAec = require("../controllers/getAec.js");
const show = require("../controllers/show.js");
const updateUser = require("../controllers/updateUser.js");
const deleteUser = require("../controllers/deleteUser.js");
const login = require("../controllers/login.js");
const loginSession = require("../controllers/loginSession.js");
const logout = require("../controllers/logout.js");
const addMachine = require("../controllers/addmachine.js");
const getMachineId = require("../controllers/getMachineId.js");
const addPhase = require("../controllers/addPhase.js");
const getPhase = require("../controllers/getPhase.js");
const AddLine = require("../controllers/addLine.js");
const getLine = require("../controllers/getLine.js");
const addLinePhase = require("../controllers/addLinePhase.js");
const getLinePhase = require("../controllers/getLinePhase.js");
const editPhase = require("../controllers/editPhase.js");
const deletePhase = require("../controllers/deletePhase.js");
const updateLinePhase = require("../controllers/updateLinePhase.js");
const deleteLinePhase = require("../controllers/deleteLinePhase.js");
const updateLinePhaseFinish = require("../controllers/updateLinePhaseFinish.js");
const updateLinePhaseInDay = require("../controllers/updateLinePhaseInDay.js");
const updatePhaseFinish = require("../controllers/updatePhaseFinish.js");
const updatePhaseInDay = require("../controllers/updatePhaseInDay.js");
const getListUser = require("../controllers/getListUser.js")
const postDayChange = require("../controllers/addDayChange.js")
const getInDay = require("../controllers/getInDay.js");
const updatePaid = require("../controllers/updatePaid.js")
const deletePaidDay = require("../controllers/deletePaidDay.js");
const getCountUser = require("../controllers/getCountUser.js");
const getUnPaid = require("../controllers/getUnPaid.js");
const getCountUserDay = require("../controllers/getCountUserDay.js");
const getSumSalary = require("../controllers/getSumSalary.js");
const getCountProjectSum = require("../controllers/getCountProjectSum.js");
const getCountProjectDone = require("../controllers/getCountProjectDone.js");
const getCountProjectLoading = require("../controllers/getCountProjectLoading.js");
const getProjectSum = require("../controllers/ProjectProgress/getProjectSum.js");
const getProjectLoading = require("../controllers/ProjectProgress/getProjectLoading.js");
const getProjectDone = require("../controllers/ProjectProgress/getProjectDone.js");
const getEfficiency = require("../controllers/ProjectProgress/getEfficiency.js");



const routers = express.Router();

routers.get("/user", getPost);

routers.get("/show", show);

routers.post("/user/add", addUser);

routers.post("/user/update", updateUser);

routers.get("/show/APS", getAps);

routers.get("/show/TSC", getTsc);

routers.get("/show/AEC", getAec);

routers.delete("/user/delete/:id", deleteUser);

routers.get("/login", loginSession);

routers.post("/login", login);

routers.get("/logout", logout);

routers.post("/machine/add", addMachine);

routers.get("/machine/:id", getMachineId);

routers.post("/phase/add", addPhase);

routers.get("/phase", getPhase);

routers.post("/line/add", AddLine);

routers.get("/line", getLine);

routers.get("/line/phase", getLinePhase);

routers.post("/phase/line/add", addLinePhase);

routers.put("/phase/edit", editPhase);

routers.delete("/phase/delete/:id", deletePhase);

routers.put("/phase/line/update", updateLinePhase);

routers.delete("/phase/line/delete/:id", deleteLinePhase);

routers.put("/phase/line/finish", updateLinePhaseFinish);

routers.put("/phase/line/inDay", updateLinePhaseInDay);

routers.put("/phase/inDay", updatePhaseInDay);

routers.put("/phase/finish", updatePhaseFinish);

routers.get("/listUser", getListUser);

routers.post("/postDayChange", postDayChange);  

routers.get("/getInDay", getInDay);

routers.put("/updatePaid", updatePaid);

routers.delete("/deletePaidDay/:id", deletePaidDay);

routers.get("/getCountUser", getCountUser);

routers.get("/getUnPaid", getUnPaid);

routers.get("/getCountUserDay", getCountUserDay);

routers.get("/getSumSalary", getSumSalary);

routers.get("/CountProjectSum", getCountProjectSum);

routers.get("/CountProjectDone", getCountProjectDone);

routers.get("/CountProjectLoading", getCountProjectLoading);

routers.get("/getProjectSum", getProjectSum);

routers.get("/getProjectLoading", getProjectLoading);

routers.get("/getProjectDone", getProjectDone);

routers.get("/getEfficiency", getEfficiency);

module.exports = routers;
