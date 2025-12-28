const { default: mongoose } = require("mongoose");

const chordSchema = mongoose.Schema({
	measure: {
		required: true,
		type: Number,
		min: 1,
	},
	beat: {
		required: true,
		type: Number,
		min: 0,
	},
	chord: {
		required: true,
		type: String,
		trim: true,
	},
	duration: {
		type: Number,
		default: 1,
		min: 1,
	},
});

const ProgressionSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		title: {
			type: String,
			required: true,
			trim: true,
		},
		artistName: {
			type: String,
			trim: true,
		},
		scaleKey: {
			type: String,
			trim: true,
		},
		timeSignature: {
			type: String,
			default: "4/4",
		},
		chords: [chordSchema],
		tags: [String],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Progression", ProgressionSchema);
