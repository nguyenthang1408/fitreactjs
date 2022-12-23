const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const post = require("./routers/post.js");
const update = require("./routers/update.js");
const deleteData = require("./routers/DeleteData.js");
const getData = require("./routers/getData.js");

const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(
  cors({
    origin: ["http://localhost:5005"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));

app.use("/", post);
app.use("/", update);
app.use("/", deleteData);
app.use("/", getData);

const POST = 4000;

app.listen(4000, () => {
  console.log(`your server is running ${POST}`);
});
