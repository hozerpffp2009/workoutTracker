const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// Create new table called cardio
const cardioSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter user name"
    },
    miles: {
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
    }
});

const Cardio = mongoose.model("Cardio", cardioSchema);
// export cardio
module.exports = Cardio;