const router = require("express").Router();
const Workout = require("../models/workoutSchema");


// post call for workout table
router.post("/api/workouts", ({
    body
}, res) => {
    Cardio.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// insert many post for workout table
router.post("/api/workouts/bulk", ({
    body
}, res) => {
    Workout.insertMany(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// get route for workout
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .sort({
            date: -1
        })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;