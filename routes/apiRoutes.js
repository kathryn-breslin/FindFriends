var friendsData = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
    })

    app.post('/api/friends', function (req, res) {
        // console.log(req.body.scores);
        var totalDifference = 0;

        for (var i = 0; i < friendsData.length; i++) {
            console.log(friendsData[i].name);
            var singleFriend = friendsData[i];

            for (var j = 0; j < singleFriend.scores.length; j++) {
                // console.log("Friend in database scores: " + singleFriend.scores[j]);
                // console.log("New Friends scores: " + req.body.scores[j])

                totalDifference += Math.abs(parseInt(req.body.scores[j]) - parseInt(singleFriend.scores[j]))
                console.log("This is the total difference: " + totalDifference)
            }
    
        }

        friendsData.push(req.body);
        res.json(true);
    })
}