const router = require('express').Router();
const {
  getLastWorkout,
  addExercise,
  createWorkout,
  getWorkoutsInRange,
  
} = require('../../controllers/workoutController');

// /workouts
router.route('/').get(getLastWorkout);

router.route('/').post(createWorkout);

router.route('/:id').put(addExercise);

router.route('/range').get(getWorkoutsInRange);

module.exports = router;
