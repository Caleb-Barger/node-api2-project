const express = require("express");
const router = express.Router()
const db = require("./user-model");

console.log(db);

router.get('/users', (req, res) => {
    res.json(db.getUsers())
        .status(200);
});

router.get('/users/:id', (req, res) => {
    res.json(db.getUsersById(req.params.id))
        .status(200);
});

router.post('/users', (req, res) => {
    if(req.body.name && req.body.id && req.body.age) {
        db.addUser(req.body);
        res.json(req.body)
            .status(201);

    } else {
        return res.send("bad request...")
            .status(418);
    }
})

module.exports = router;