const mongoose = require("mongoose");

//IntroSchema
const introSchema = new mongoose.Schema({
	welcomeText: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	caption: {
		type: String,
		required: true,
		//default:"Welcome to Mern Portfolio"
	},
	description: {
		type: String,
		required: true,
	},
});

// aboutSchema
const aboutSchema = new mongoose.Schema({
	lottieURL: {
		type: String,
		required: true,
	},
	description1: {
		type: String,
		required: true,
	},
	description2: {
		type: String,
		required: true,
	},
	skills: {
		type: Array,
		required: true,
	},
});

//experienceSchema
const experienceSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	period: {
		type: String,
		required: true,
	},
	company: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
});

//projectsSchema
const projectsSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
	technologies: {
		type: Array,
		required: true,
	},
});

//EducationSchema
const educationSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	period: {
		type: String,
		required: true,
	},
	marks: {
		type: Number,
		required: true,
	},
});

//CertificationSchema
const certificationSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
});

//contactSchema
const contactSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		required: true,
	},
	mobile: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
});

//here "intros","abouts","experiences","projects","education","certification","contact" are the collection names same as in the campass datavase. 
module.exports = {
	Intro: mongoose.model("intros", introSchema),
	About: mongoose.model("abouts", aboutSchema),
	Experience: mongoose.model("experiences", experienceSchema),
	Project: mongoose.model("projects", projectsSchema),
	Education: mongoose.model("education", educationSchema),
	Certification: mongoose.model("certification", certificationSchema),
	Contact: mongoose.model("contact", contactSchema),
};
