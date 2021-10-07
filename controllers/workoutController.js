const { Workout } = require('../models')

//build routes from /public/api.js

module.exports = {
    // Get last workout
    getLastWorkout(req, res) {
      Workout.find()
        .then((workout) => res.json(workout))
        .catch((err) => res.status(500).json(err));
    },
    // create a new workout
    createWorkout(req, res) {
      Workout.create(req.body)
        .then((newWorkout) => res.json(newWorkout))
        .catch((err) => res.status(500).json(err));
    },
    //add exerciseworkouts
    addExercise(req, res) {
        Workout.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { exercises: req.body } },
          { new: true }
        )
          .then((workout) =>
            !workout
              ? res.status(404).json({ message: 'No workout with this id!' })
              : res.json(workout)
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },

    //get workouts in range
    //https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/
    //https://docs.mongodb.com/manual/reference/operator/aggregation/sum/
    //https://docs.mongodb.com/manual/reference/operator/aggregation/limit/
    getWorkoutsInRange(req, res) {
        Workout.aggregate([
            { $sort: { _id: -1} },
          
            //limit 7 = last 7 days of workouts 
            { $limit: 7, },

            { $addFields: { totalDuration: { $sum: '$exercise.duration'} } }
        ])
    }
  };