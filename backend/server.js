require("dotenv").config();

const express = require("express");
const cors = require("cors");
const InitiateMongoServer = require("./config/db");
const routeExample = require("./routes/routeExample");
const toDo = require("./routes/todo");

const bodyParser = require("body-parser");

InitiateMongoServer();
const app = express();
const PORT = process.env.PORT;
const MONGOURI = process.env.MONGO;
app.use(cors());

app.use(bodyParser.json({ limit: "50mb", extended: true }));

app.get("/", (req, res) => {
	res.json({ message: "API working" });
});

app.use("/routeExample", routeExample);
app.use("/todo", toDo);

app.listen(PORT, (req, res) => {
	console.log(`server started at PORT ${PORT}`);
});
