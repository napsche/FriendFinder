var friendsjs = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsjs);
    });

    app.post("/api/friends", function(req, res) {
        console.log(res);
    });
};