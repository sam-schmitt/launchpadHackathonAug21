const express = require("express");
const router = express.Router();
const ModelExample = require("../model/modelExample");

router.post("/post", async (req, res) => {
	const { string, object, bool, num, array } = req.body;
	try {
		example = new ModelExample({
			string,
			object,
			bool,
			num,
			array,
		});

		await example.save().then(
			res.status(200).json({
				msg: "example post successful",
			})
		);
	} catch (err) {
		console.log(err);
		res.status(500).send("Error in Saving");
	}
});

router.get("/allPosts", async (req, res) => {
	try {
		let allPosts = await ModelExample.find();

		if (allPosts) {
			res.json(allPosts);
		} else {
			res.json("Error finding all posts");
		}
	} catch (err) {
		console.log(err);
		res.status(500).send("Error in finding all posts");
	}
});

module.exports = router;
