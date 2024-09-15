const router = require("express").Router();
const {
	Intro,
	About,
	Experience,
	Project,
	Education,
	Certification,
	Contact,
} = require("../models/portfolioModel");
const User = require("../models/userModel");

//get all portfolio data
router.get("/get-portfolio-data", async (req, res) => {
	try {
		const intros = await Intro.find();
		const abouts = await About.find();
		const experiences = await Experience.find();
		const projects = await Project.find();
		//const education = await Education.find();
		const certifications = await Certification.find();
		const contacts = await Contact.find();

		res.status(200).send({
			intro: intros[0],
			about: abouts[0],
			experience: experiences,
			projects: projects,
			//education: education,
			certification: certifications,
			contact: contacts[0],
		});
	} catch (error) {
		res.status(500).send(error);
	}
});

//update Intro
router.post("/update-intro", async (req, res) => {
	try {
		const intro = await Intro.findOneAndUpdate(
			{ _id: req.body._id },
			req.body,
			{ new: true }
		);
		res.status(200).send({
			data: intro,
			success: true,
			message: "Data updated successfully",
		});
	} catch (error) {
		res.status(500).send(error);
	}
});

//update About
router.post("/update-about", async (req, res) => {
	try {
		const about = await About.findOneAndUpdate(
			{ _id: req.body._id },
			req.body,
			{ new: true }
		);
		res.status(200).send({
			data: about,
			success: true,
			message: " About Data updated successfully",
		});
	} catch (error) {
		res.status(500).send(error);
	}
});

//Experience Section

//add experience
router.post("/add-experience", async (req, res) => {
	try {
		const experience = new Experience(req.body);
		await experience.save();
		res.status(200).send({
			data: experience,
			success: true,
			message: "Experience added successfully",
		});
	} catch (error) {
		console.error(error); // Log the exact error on the server
		res.status(500).send({
			success: false,
			message: "Failed to add experience",
			error: error.message,
		});
	}
});

//update experience
router.put("/update-experience", async (req, res) => {
	try {
		const experience = await Experience.findOneAndUpdate(
			{ _id: req.body._id },
			req.body,
			{ new: true }
		);
		res.status(200).send({
			data: experience,
			success: true,
			message: "Experience updated successfully",
		});
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
});

//delete experience
router.post("/delete-experience", async (req, res) => {
	try {
		const experience = await Experience.findOneAndDelete({
			_id: req.body._id,
		});
		res.status(200).send({
			data: experience,
			success: true,
			message: "Experience deleted successfully",
		});
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
});

//Project Section

//add project
router.post("/add-project", async (req, res) => {
	try {
		const project = new Project(req.body);
		await project.save();
		res.status(200).send({
			data: project,
			success: true,
			message: "Project added successfully",
		});
	} catch (error) {
		console.error(error); // Log the exact error on the server
		res.status(500).send({
			success: false,
			message: "Failed to add project",
			error: error.message,
		});
	}
});

//update project
router.put("/update-project", async (req, res) => {
	try {
		const project = await Project.findOneAndUpdate(
			{ _id: req.body._id },
			req.body,
			{ new: true }
		);
		res.status(200).send({
			data: project,
			success: true,
			message: "Project updated successfully",
		});
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
});

//delete project
router.post("/delete-project", async (req, res) => {
	try {
		const project = await Project.findOneAndDelete({
			_id: req.body._id,
		});
		res.status(200).send({
			data: project,
			success: true,
			message: "project deleted successfully",
		});
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
});

//Certification Section

//add certificate
router.post("/add-course", async (req, res) => {
	try {
		const course = new Certification(req.body);
		await course.save();
		res.status(200).send({
			data: course,
			success: true,
			message: "Certification added successfully",
		});
	} catch (error) {
		console.error(error); // Log the exact error on the server
		res.status(500).send({
			success: false,
			message: "Failed to add certificate",
			error: error.message,
		});
	}
});

//update certificate
router.put("/update-course", async (req, res) => {
	try {
		const course = await Certification.findOneAndUpdate(
			{ _id: req.body._id },
			req.body,
			{ new: true }
		);
		res.status(200).send({
			data: course,
			success: true,
			message: "Certification updated successfully",
		});
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
});

//delete certificate
router.post("/delete-course", async (req, res) => {
	try {
		const course = await Certification.findOneAndDelete({
			_id: req.body._id,
		});
		res.status(200).send({
			data: course,
			success: true,
			message: "Certification deleted successfully",
		});
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
});

//Contact Section

//update Contact
router.post("/update-contact", async (req, res) => {
	try {
		const contact = await Contact.findOneAndUpdate(
			{ _id: req.body._id },
			req.body,
			{ new: true }
		);
		res.status(200).send({
			data: contact,
			success: true,
			message: "Contact Data updated successfully",
		});
	} catch (error) {
		res.status(500).send(error);
	}
});

//admin login
router.post("/admin-login", async (req, res) => {
	try {
		const user = await User.findOne({
			username: req.body.username,
			password: req.body.password,
		});
		user.password ="";
		if (user) {
			res.status(200).send({
				data: user,
				success: true,
				message: "Login Successful",
			});
		} else {
			res.status(400).send({
				success: false,
				message: "Invalid Credentials",
			});
		}
	} catch (error) {
		res.status(500).send(error);
	}
});
module.exports = router;
