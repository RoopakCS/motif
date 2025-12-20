const { default: mongoose } = require("mongoose");

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
		chords: [
			{
				measure: Number,
				chord: String,
				duration: Number,
			},
		],
		tags: [String],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Progression", ProgressionSchema)