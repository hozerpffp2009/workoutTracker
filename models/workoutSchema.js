const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// Create new table called cardio
const workoutSchema = new Schema({
    exercises: [{

        type: {
            type: String,
            trim: true,
            required: "Enter an exercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter user name"
        },
        duration: {
            type: Number,
            required: "Enter number of minutes spent"
        },
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number
    }],
    day: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model("Workout", workoutSchema);
// export Workout
module.exports = Workout;