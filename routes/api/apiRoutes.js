var db = require('../../models');

//build routes from /public/api.js

//get last workout
module.exports =function(app) {
    app.get('/api/workouts', (req, res) => {
        db.Workout.find({}).then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    //Create new workout


}