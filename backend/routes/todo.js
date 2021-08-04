const express = require("express");
const router = express.Router();
const ToDo = require("../model/ToDo");

router.post("/post", async (req, res) => {
	const { item } = req.body;
	try {
		todo = new ToDo({
			item,
			done: false,
		});

		await todo.save().then(
			res.status(200).json({
				msg: "todo post successful",
			})
		);
	} catch (err) {
		console.log(err);
		res.status(500).send("Error in Saving");
	}
});

module.exports = router;
