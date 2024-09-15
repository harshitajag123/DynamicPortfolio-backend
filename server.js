const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
dotenv.config();
const app = express();
const dbConfig = require("./config/dbConfig");
const PORT = process.env.PORT || 3000;
app.use(express.json());

// Use CORS
app.use(
	cors({
		origin: [
			"http://localhost:5173",
			"https://dynamic-portfolio-beta.vercel.app", // Remove trailing slash
		], // Frontend URLs
		methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
		credentials: true, //access-control-allow-credentials:true
	})
);

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Something broke!");
});

//testing route
app.get("/test", (req, res) => {
	res.send("Hello World!");
});

//Portfolio Routes
const portfolioRoute = require("./routes/portfolioRoutes");
app.use("/api/portfolio", portfolioRoute);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
//MernPortfolio mernPortfolio
