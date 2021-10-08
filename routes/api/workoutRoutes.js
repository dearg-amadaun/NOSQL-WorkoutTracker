const router = require('express').Router();
const {
  getLastWorkout,
  addExercise,
  createWorkout,
  getWorkoutsInRange,
  
} = require('../../controllers/workoutController');

// Reference workout controllers and public/api.js to write 
router.route('/').get(getLastWorkout);

router.route('/:id').put(addExercise);

router.route('/').post(createWorkout);

router.route('/range').get(getWorkoutsInRange);

module.exports = router;
