const mongoose = require("mongoose");

const ExampleSchema = new mongoose.Schema({
	object: {
		type: Object,
	},
	array: {
		type: Array,
	},
	string: {
		type: String,
	},
	bool: {
		type: Boolean,
	},
	num: {
		type: Number,
	},
});

module.exports = mongoose.model("example", ExampleSchema);
