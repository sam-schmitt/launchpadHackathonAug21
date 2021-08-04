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
		await todo.save();
		res.json("post successful");
	} catch (err) {
		res.json("err");
	}
});

router.get("/allPosts", async (req, res) => {
	try {
		let allPosts = await ToDo.find();
		if (allPosts) {
			res.json(allPosts);
		} else {
			res.json("Error finding all posts");
		}
	} catch (err) {
		res.json("err");
	}
});

router.post("/completeItem", async (req, res) => {
	const { itemID } = req.body;
	try {
		let todo = await ToDo.findById(itemID);
		if (todo) {
			todo.done = true;
			await todo.save();
			res.json("successfully completed");
		} else {
			res.json("item not found");
		}
	} catch (err) {
		res.json("err");
	}
});

router.post("/deleteItem", async (req, res) => {
	const { itemID } = req.body;
	try {
		await ToDo.findByIdAndDelete(itemID);
		res.json("successfully deleted");
	} catch (err) {
		res.json("err");
	}
});

module.exports = router;
