var friendsjs = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsjs);
    });

    app.post("/api/friends", function(req, res) {
        console.log(req.body.scores);

        var user = req.body; 

        for (var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        var bestFriendScore = 0;
        var minDiff = 40;

        for (var i = 0; i < friendsjs.length; i++) {
            var totalDifference = 0; 
            for (var j = 0; j < friendsjs[i].scores.length; j++) {
                var difference = Math.abs(user.scores[j] - friendsjs[i].scores[j]);
                totalDifference += difference;
            }

            if(totalDifference < minDiff) {
                bestFriendScore = i; 
                minDiff = totalDifference;
            }
        }

        friendsjs.push(user);

        res.json(friendsjs[bestFriendScore]);
    });
};