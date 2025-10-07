const express = require("express");
const verifyAuth = require("../middleware/verifyAuth");
const {
	createProgression,
	getUserProgression,
	deleteProgression,
} = require("../controllers/progresstionController");

const progressionRouter = express.Router();

progressionRouter.post("/", verifyAuth, createProgression);
progressionRouter.get("/", verifyAuth, getUserProgression);
progressionRouter.delete("/:id", verifyAuth, deleteProgression);

module.exports = progressionRouter;
