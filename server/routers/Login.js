const express = require("express");
const login = require("../controllers/Login/login.js");
const loginSession = require("../controllers/Login/loginSession.js");
const logout = require("../controllers/Login/logout.js");



const routers = express.Router();

routers.post("/login", login);

routers.get("/logout", logout);

routers.get("/login", loginSession);


module.exports = routers;