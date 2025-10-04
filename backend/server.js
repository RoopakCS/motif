const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./src/routes/authRoutes.js");

require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log("MongoDB Connected");
	})
	.catch((error) => {
		console.error(error.message);
	});

app.listen(process.env.PORT, () => {
	console.log(
		`Server is running on port http://localhost:${process.env.PORT}`
	);
});
