const mongoose = require("mongoose");
const router = require("../routes/portfolioRoutes");
const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});


module.exports = mongoose.model("users", userSchema);
