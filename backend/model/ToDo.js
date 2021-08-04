const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
	item: {
		type: String,
	},
	done: {
		type: Boolean,
	},
});

module.exports = mongoose.model("todo", ToDoSchema);
