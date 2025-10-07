const express = require("express");
const verifyAuth = require("../middleware/verifyAuth");
const {
	createProgression,
	getUserProgression,
	deleteProgression,
    updateProgression,
} = require("../controllers/progresstionController");

const progressionRouter = express.Router();

progressionRouter.post("/", verifyAuth, createProgression);
progressionRouter.get("/", verifyAuth, getUserProgression);
progressionRouter.put("/:id", verifyAuth, updateProgression)
progressionRouter.delete("/:id", verifyAuth, deleteProgression);

module.exports = progressionRouter;
