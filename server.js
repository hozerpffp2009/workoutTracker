// Dependencies
const express = require("express");
const mongoose = require("mongoose");

// Local host 4000 port
const PORT = process.env.PORT || 4000;
const app = express();

// middleware setup
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));

// Connect to mongo db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// Routes
app.use(require("./routes/workoutsAPI.js"));
app.use(require("./routes/html-routes.js"))

// Listen route required
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});