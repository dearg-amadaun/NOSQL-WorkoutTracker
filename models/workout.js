const { Schema, model } = require('mongoose');

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Please enter an exercise type"
        },
        name: {
          type: String,
          trim: true,
          required: "Please enter an exercise name"
        },
        duration: {
          type: Number,
          required: "Please enter the duration"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

//exercise  duration virtual
workoutSchema.virtual('totalDuration').get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = model('workout', workoutSchema);

module.exports = Workout;