const express = require("express");
const router = express.Router();
const ModelExample = require("../model/modelExample");

router.post("/post", async (req, res) => {
	console.log(req.body);
	const { string, object, bool, num, array } = req.body;
	try {
		example = new ModelExample({
			string,
			object,
			bool,
			num,
			array,
		});

		await example.save();
		res.json("example post successful");
	} catch (err) {
		res.json("err");
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
		res.json("err");
	}
});

module.exports = router;
