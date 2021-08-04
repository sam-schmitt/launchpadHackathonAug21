const mongoose = require("mongoose");

const MONGOURI = process.env.MONGO;

const InitiateMongoServer = async () => {
	try {
		await mongoose.connect(MONGOURI, {
			useNewUrlParser: true,
		});
		console.log("Connected to DB !!");
	} catch (e) {
		console.log("Connection to mongo failed");
	}
};

module.exports = InitiateMongoServer;
