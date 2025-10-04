const { hash, compare, genSalt } = require("bcrypt");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			minlength: 3,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			lowercase: true,
		},
		passwordHash: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

userSchema.pre("save", async function (next) {
	if (!this.isModified("passwordHash")) return next();

	const salt = await genSalt(10);
	this.passwordHash = await hash(this.passwordHash, salt);
	next();
});

userSchema.methods.comparePassword = async function (enteredPassword) {
	return await compare(enteredPassword, this.passwordHash);
};

module.exports = mongoose.model("User", userSchema);
