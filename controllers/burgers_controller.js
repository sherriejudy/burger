var express = require('express');
var burger = require("../models/burger.js");

var router = express.Router();
// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        res.render("index", { burger_data: data, notDevoured: true })
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(
        req.body.name,
        function (result) {
            // Send back the ID of the new quote
            // res.json({ id: result.insertId });
            res.redirect("/")
        });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne(
        burger.updateOne(
            req.body.name,
            req.body.devoured
            , condition, function (result) {
                if (result.changedRows == 0) {
                    // If no rows were changed, then the ID must not exist, so 404
                    return res.status(404).end();
                } else {
                    res.status(200).end();

                }
            }));
});



// Export routes for server.js to use.
module.exports = router;
