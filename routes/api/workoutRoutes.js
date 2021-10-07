const router = require('express').Router();
const {
  getLastWorkout,
  addExercise,
  createWorkout,
  getWorkoutsInRange,
  
} = require('../../controllers/workoutController');

// /api/workouts
router.route('/').get(getLastWorkout);

router.route('/').post(createWorkout);

router.route('/:workoutId').put(addExercise);

router.route('/api/workouts/range').get(getWorkoutsInRange);

module.exports = router;
