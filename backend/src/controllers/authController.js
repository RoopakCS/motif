const User = require("../models/User");
const generateToken = require("../utils/generateToken.js");

const registerUser = async (req, res) => {
	try {
		const { username, email, password } = req.body;

		if (!username || !email || !password) {
			return res.status(400).json({ message: "All fields are required" });
		}

		if (password.length < 8) {
			return res.status(400).json({
				message: "Password must be atleast 8 characters long",
			});
		}

		const userExists = await User.findOne({ email });
		if (userExists) {
			return res.status(400).json({ message: "User already exists" });
		}

		const user = new User({
			username,
			email,
			passwordHash: password,
		});

		await user.save();

		res.status(200).json({
			username: user.username,
			email: user.email,
			token: generateToken(user._id),
		});
	} catch (error) {
		return res
			.status(500)
			.json({ message: "Server error", error: error.message });
	}
};

const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email });
		if (!user) {
			return res
				.status(401)
				.json({ message: "Invalid email or password" });
		}

		const isMatch = await user.comparePassword(password);
		if (!isMatch) {
			return res
				.status(401)
				.json({ message: "Invalid email or password" });
		}

		res.status(200).json({
			username: user.username,
			email: user.email,
			token: generateToken(user._id),
		});
	} catch (error) {
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

module.exports = { registerUser, loginUser };
