require("dotenv").config();

const express = require("express");
const InitiateMongoServer = require("./config/db");
const routeExample = require("./routes/routeExample");

InitiateMongoServer();
const app = express();
const PORT = process.env.PORT;
const MONGOURI = process.env.MONGO;

app.get("/", (req, res) => {
	res.json({ message: "API working" });
});

app.use("/routeExample", routeExample);

app.listen(PORT, (req, res) => {
	console.log(`server started at PORT ${PORT}`);
});
