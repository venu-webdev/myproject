import pushupsImage from './images/pushups.jpg';
import Squats from './images/squats.jpg';
import sidelunge from './images/side-lunge.jpg';
import boxjump from './images/boxjumpp.jpg';
import dumbellLunge from './images/dumbellLunge.jpg';
import singleleglift from './images/singleleglift.jpg';
import gobletsquat from './images/gobletsquad.jpg';
import walkinglunge from './images/walking-lunges.jpg';
import hipthrust from './images/hipthrust.jpg'
import legpress from './images/legpress.jpg'

// day-2 excercise
import arnoldpress from './images2/arnoldpress.jpg';
import benchpress from './images2/benchpress.jpg';
import chestpress from './images2/chestpress.jpg';
import dumbbellrow from './images2/dumbbellrow.jpg';
import dumbellbench from './images2/dumbellbenchpress.jpg';
import overheadpress from './images2/overheadpress.jpg';
import plank from './images2/plank.jpg';
import pullup from './images2/pullup.jpg';
import pushup from './images2/pushup.jpg';
import tricep from './images2/tricep.jpg';

// taking the same images again because it takes a lot of time










const exercisesData = [
  // Sample data structure for exercises per day
  {
    day: 1,
    exercises: [
      { name: 'Push-ups', image: pushupsImage },
      { name: 'Squats', image: Squats },
      { name: 'Side-Lunges', image: sidelunge },
      { name: 'boxjump', image: boxjump },
      { name: 'dumbellLunge', image: dumbellLunge },
      { name: 'singleleglift', image: singleleglift },
      { name: 'gobletsquat', image: gobletsquat },
      { name: 'walkinglunge', image: walkinglunge },
      { name: 'Hip-Thrust', image: hipthrust },
      { name: 'Leg-Press', image: legpress },

    ],
  },
  {
    day: 2,
    exercises: [
      { name: 'Squats', image: arnoldpress },
      { name: 'Bench-Press', image: benchpress },
      { name: 'Chest-Press', image: chestpress },
      { name: 'Dumbbellrow', image: dumbbellrow },
      { name: 'DumbellBench', image: dumbellbench },
      { name: 'OverheadPress', image: overheadpress },
      { name: 'Plank', image: plank },
      { name: 'Pull-up', image: pullup },
      { name: 'Push-up', image: pushup },
      { name: 'Triceps', image: tricep },


    ],
  }, {
    day: 3,
    exercises: [
      { name: 'Plank', image: plank },
      { name: 'Bird-dog', image: pullup },
      { name: 'Deadbug', image: chestpress },
      { name: 'LegRaise', image: benchpress },
      { name: 'Side-Plank', image: arnoldpress },
      { name: 'Bridge', image: pushup },
      { name: 'Crunches', image: overheadpress },
      { name: 'Russain-Twist', image: dumbellbench },
      { name: 'Toe-taps', image: dumbellLunge },
      { name: 'Hollow-hold', image: dumbbellrow },


    ],
  },
  {
    day: 4,
    exercises: [
      { name: 'Running', image: pullup },
      { name: 'Cycling', image: chestpress },
      { name: 'Swimming', image: benchpress },
      { name: 'Dance', image: arnoldpress },
      { name: 'Jump-Rope', image: overheadpress },
      { name: 'Jumping jack', image: dumbellLunge },
      { name: 'Rowing', image: dumbellbench },
      { name: 'Burpee', image: plank },
      { name: 'Squat Jump', image: chestpress },
      { name: 'Elliptical', image: Squats },


    ],
  }, {
    day: 5,
    exercises: [
      { name: 'LegDeadLift', image: Squats },
      { name: 'LegStand', image: dumbbellrow },
      { name: 'Heeltaps', image: dumbellbench },
      { name: 'Heeltoewalking', image: dumbellLunge },
      { name: 'Plank', image: plank },
      { name: 'HighLunge', image: pushup },
      { name: 'chairSits', image: pullup },
      { name: 'Chair-sits', image: arnoldpress },
      { name: 'squat', image: Squats },
      { name: 'Crunches', image: chestpress },


    ],
  }, {
    day: 6,
    exercises: [
      { name: 'DeadLift', image: pullup },
      { name: 'Lunges', image: pushup },
      { name: 'Squats', image: Squats },
      { name: 'Burpee', image: arnoldpress },
      { name: 'Plank', image: legpress },
      { name: 'Pushup', image: chestpress },
      { name: 'Bench Press', image: dumbellLunge },
      { name: 'Bicep curl', image: dumbellbench },
      { name: 'Squat', image: dumbbellrow },
      { name: 'Side-Plank', image: overheadpress },


    ],
  }, {
    day: 7,
    exercises: [
      { name: 'Side-lunge', image: arnoldpress },
      { name: 'Arm-circle', image: legpress },
      { name: 'Doorway-stretch', image: chestpress },
      { name: 'Lunge', image: dumbellLunge },
      { name: 'Cat Cow', image: dumbellbench },
      { name: 'Hip rotation', image: dumbbellrow },
      { name: 'Shoulder-rolls', image: pullup },
      { name: 'Figure Four', image: pushup },
      { name: 'Front-Swings', image: Squats },
      { name: 'Knee to Chest', image: chestpress },


    ],
  }, {
    day: 8,
    exercises: [
      { name: 'Squats', image: Squats },
      { name: 'Pushups', image: pushup },
      { name: 'Plank', image: plank },
      { name: 'Deadlift', image: chestpress },
      { name: 'Pull-up', image: pullup },
      { name: 'Overhead-lift', image: dumbellLunge },
      { name: 'Side-lunge', image: dumbellbench },
      { name: 'Step-up', image: dumbbellrow },
      { name: 'Squat-jump', image: arnoldpress },
      { name: 'Gobble-squat', image: legpress },


    ],
  }, {
    day: 9,
    exercises: [
      { name: 'Pylometrics', image: plank },
      { name: 'Shuttle-run', image: pushup },
      { name: 'Lateral-jump', image: chestpress },
      { name: 'Sprint-traning', image: arnoldpress },
      { name: 'Tuck Jump', image: pullup },
      { name: 'A-skip', image: dumbbellrow },
      { name: 'Butt-kicks', image: dumbellLunge },
      { name: 'Hill-sprints', image: dumbbellrow },
      { name: 'Box Jumps', image: Squats },
      { name: 'Side drills', image: legpress },

      // Add 8 more exercises for day 2
    ],
  },
  {
    day: 10,
    exercises: [
      { name: 'Hamstring Stretch', image: Squats },
      { name: 'Side Stretch', image: pullup },
      { name: 'Reverse-Lunge', image: pushup },
      { name: 'Upperbackstretch', image: arnoldpress },
      { name: 'Cat cow', image: legpress },
      { name: 'Balasana', image: dumbbellrow },
      { name: 'Triceps', image: dumbellLunge },
      { name: 'ChestStretch', image: dumbellbench },
      { name: 'PigeonPose', image: chestpress },
      { name: 'Spinal Twist', image: plank },


    ],
  },

];
export default exercisesData;