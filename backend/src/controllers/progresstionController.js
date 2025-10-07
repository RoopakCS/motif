const Progression = require("../models/Progression");

const createProgression = async (req, res) => {
	try {
		const { title, artistName, scaleKey, timeSignature, chords, tags } =
			req.body;

		const progression = await Progression.create({
			user: req.user._id,
			title,
			artistName,
			scaleKey,
			timeSignature,
			chords,
			tags,
		});

		res.status(201).json(progression);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const getUserProgression = async (req, res) => {
	try {
		const progressions = await Progression.find({
			user: req.user._id,
		}).sort({ createdAt: -1 });

		res.json(progressions);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const deleteProgression = async (req, res) => {
	try {
		const progression = await Progression.findById(req.params.id);

		if (!progression) {
			return res.status(404).json({ message: "Progression not found" });
		}

		if (progression.user.toString() !== req.user._id.toString()) {
			return res.status(403).json({ message: "Not authorized" });
		}

		await progression.deleteOne();

		return res
			.status(200)
			.json({ message: "Progression deleted successfully" });
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

module.exports = { createProgression, getUserProgression, deleteProgression };
