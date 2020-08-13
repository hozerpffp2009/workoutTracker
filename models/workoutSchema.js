const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// Create new table called cardio
const workouts = new Schema({
    cardio_name: {
        type: String,
        trim: true,
        required: "Enter user name"
    },
    distance: {
        type: Number,
        required: "Enter number of miles ran"
    },
    duration: {
        type: Number,
        required: "Enter number of minutes spent"
    },
    date: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        trim: true,
        required: "Enter exercise name"
    },
    weight: {
        type: Number,
        required: "Enter number of minutes spent"
    },
    sets: {
        type: Number,
        required: "Enter number of sets completed"
    },
    reps: {
        type: Number,
        required: "Enter number of reps completed"
    },
    resistance_duration: {
        type: Number,
        required: "Enter number of minutes spent"
    },
});

const Workouts = mongoose.model("Workouts", workouts);
// export Workouts
module.exports = Workouts;