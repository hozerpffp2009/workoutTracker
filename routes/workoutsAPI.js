const router = require("express").Router();
const Workout = require("../models/workoutSchema");


// post call for workout table
router.post("/api/workouts", ({
    body
}, res) => {
    Workout.create(body)
        .then(res => {
            res.json(res);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/:id", (req, res) => {
    Workout.find({})
        .sort({
            id: -1
        })
        .then(res => {
            res.json(res);
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
        .then(res => {
            res.json(res);
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
        .then(res => {
            res.json(res);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;