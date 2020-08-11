const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// Created table name resistance
const resistanceSchema = new Schema({
    exerciseName: {
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
    duration: {
        type: Number,
        required: "Enter number of minutes spent"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Resistance = mongoose.model("Resistance", resistanceSchema);
// export resistance
module.exports = Resistance;