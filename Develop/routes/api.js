const router = require("express").Router();
const Cardio = require("../models/cardioSchema");
const Resistance = require("../models/resistanceSchema");
const {
    db
} = require("../models/cardioSchema");
// post call for cardio table
router.post("/api/cardio", ({
    body
}, res) => {
    Cardio.create(body)
        .then(dbCardio => {
            res.json(dbCardio);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
// post call for resistance table
router.post("/api/resistance", ({
    body
}, res) => {
    Resistance.create(body)
        .then(dbResistance => {
            res.json(dbResistance);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
// insert many post for cardio
router.post("/api/cardio/bulk", ({
    body
}, res) => {
    Cardio.insertMany(body)
        .then(dbCardio => {
            res.json(dbCardio);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
// insert many post for resistance
router.post("/api/resistance/bulk", ({
    body
}, res) => {
    Resistance.insertMany(body)
        .then(dbResistance => {
            res.json(dbResistance);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
// get route for cardio
router.get("/api/cardio", (req, res) => {
    Cardio.find({})
        .sort({
            date: -1
        })
        .then(dbCardio => {
            res.json(dbCardio);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
// get route for resistance
router.get("/api/resistance", (req, res) => {
    Resistance.find({})
        .sort({
            date: -1
        })
        .then(dbResistance => {
            res.json(dbResistance);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;