// import React, { useState } from 'react';
// import Day from './Day';
// import LandingPage from './LandingPage/LandingPage';
// import './App.css';
// import exercisesData from './ExcerciseData'; 

// const App = () => {
//   const [currentDay, setCurrentDay] = useState(1);
//   const [isAllDaysCompleted, setIsAllDaysCompleted] = useState(false);
//   const [hasStarted, setHasStarted] = useState(false);

//   const handleStart = () => {
//     setHasStarted(true); // Start the exercises
//   };

//   const handleNextDay = () => {
//     if (currentDay < 10) {
//       setCurrentDay(currentDay + 1);
//     }
//     else {
//       // All 10 days completed, show popup
//       setIsAllDaysCompleted(true);
//     }
//   };
//   const handleFinish = () => {
//     setIsAllDaysCompleted(true);  // Mark all days completed
//   };
//   const handleRestart = () => {
//     setCurrentDay(1);
//     setIsAllDaysCompleted(false);
//      setHasStarted(false);
//   };

//   const currentExercises = exercisesData.find(dayData => dayData.day === currentDay).exercises;

//   return (


//     <div>
//       {!hasStarted ? (
//         <LandingPage onStart={handleStart} />
//       ) : !isAllDaysCompleted ? (

//     <Day day={currentDay} 
//     exercises={currentExercises} 
//     onNextDay={handleNextDay}
//      />
//   ) : (
//     <div className="congrats-container">
//       <div className="congrats-box">

//         <h2 className="congrats-message">Congratulations!</h2>

//         <p>You have completed all 10 days of exercises!</p>

//         <div className="stars">
//         &#9733; &#9733; &#9733; &#9733; &#9733;
//       </div>

//         { <button className="congrats-button" onClick={handleRestart}>Restart Program</button> }

//       </div>
//     </div>
//   )}
//   </div>

//   )
// }







// export default App;
import React, { useState } from 'react';
import Day from './Day';
import LandingPage from './LandingPage/LandingPage';
import './App.css';
import exercisesData from './ExcerciseData';

const App = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const [isAllDaysCompleted, setIsAllDaysCompleted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    setHasStarted(true); // Start the exercises
  };

  const handleNextDay = () => {
    if (currentDay < 10) {
      setCurrentDay(currentDay + 1);
    } else {
      // All 10 days completed, show popup
      setIsAllDaysCompleted(true);
    }
  };

  const handleFinish = () => {
    setIsAllDaysCompleted(true);  // Mark all days completed
  };

  const handleRestart = () => {
    setCurrentDay(1);
    setIsAllDaysCompleted(false);
    setHasStarted(false);
  };

  const currentExercises = exercisesData.find(dayData => dayData.day === currentDay).exercises;

  return (
    <div>
      {!hasStarted ? (
        <LandingPage onStart={handleStart} />
      ) : !isAllDaysCompleted ? (
        <Day
          day={currentDay}
          exercises={currentExercises}
          onNextDay={handleNextDay}
          onFinish={handleFinish}  // Pass onFinish to the Day component
        />
      ) : (
        <div className="congrats-container">
          <div className="congrats-box">
            <h2 className="congrats-message">Congratulations!</h2>
            <p>You have completed all 10 days of exercises!</p>
            <div className="stars">
              &#9733; &#9733; &#9733; &#9733; &#9733;
            </div>
            <button className="congrats-button" onClick={handleRestart}>
              Restart Program
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
