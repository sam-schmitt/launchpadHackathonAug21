const mongoose = require("mongoose");

const ExampleSchema = new mongoose.Schema({
	item: {
		type: String,
	},
	done: {
		type: Boolean,
	},
});

module.exports = mongoose.model("example", ExampleSchema);
