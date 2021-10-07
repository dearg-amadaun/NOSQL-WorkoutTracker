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
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    //add exercise
    addExercise(req, res) {
        Workout.findOneAndUpdate(
          { _id: req.params.workoutId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((application) =>
            !application
              ? res.status(404).json({ message: 'No workout with this id!' })
              : res.json(application)
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },

    //get workouts in range
    
  };