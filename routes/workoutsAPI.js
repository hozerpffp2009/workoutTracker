const router = require("express").Router();
const Workout = require("../models/workoutSchema");


// post call for workout table
router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        });
});

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        });
});

router.put("/api/workouts/:id", ({
    body,
    params
}, res) => {
    Workout.findByIdAndUpdate(
            params.id, {
                $push: {
                    exercises: body
                }
            }, {
                new: true,
                runValidators: true
            }
        )
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then(res => {
            res.json(res);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;