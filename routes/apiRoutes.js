var friendsData = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
    })

    app.post('/api/friends', function (req, res) {

        var totalDifference;

        for (var i = 0; i < friendsData.length; i++) {
            console.log(friendsData[i].name);
            var singleFriend = friendsData[i];

            for (var j = 0; j < singleFriend.scores.length; j++) {
                console.log(singleFriend.scores[j]);
            }
    
        }

        friendsData.push(req.body);
        res.json(true);
    })
}