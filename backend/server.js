const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const authRouter = require("./src/routes/authRoutes.js");
const progressionRouter = require("./src/routes/progressionRoutes.js")

require("dotenv").config();

const app = express();
app.use(cors())
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/progressions", progressionRouter)

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log(`MongoDB Connected: ${mongoose.connection.name}`);
	})
	.catch((error) => {
		console.error(error.message);
	});

app.listen(process.env.PORT, () => {
	console.log(
		`Server is running on port http://localhost:${process.env.PORT}`
	);
});
