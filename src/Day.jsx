// import React, { useState, useEffect } from 'react';
// import Exercise from './Exercise';
// import './App.css';
// const Day = ({ day, exercises, onNextDay, onFinish }) => {
//   const [points, setPoints] = useState(0);
//   const [completedExercises, setCompletedExercises] = useState(Array(10).fill(false));


//   useEffect(() => {
//     setPoints(0);  // Reset points to 0
//     setCompletedExercises(Array(10).fill(false));  // Reset all exercises to incomplete
//   }, [day]); 


//   const handleComplete = (index) => {
//     if (!completedExercises[index]) {
//       const updatedExercises = [...completedExercises];
//       updatedExercises[index] = true;
//       setCompletedExercises(updatedExercises);
//       setPoints(points + 10);
//     }
//   };

//   return (
//     <div>
//       <div className ='day-header'>
  
//        <h2>Day {day} Exercises</h2>
//       <p>Total Points: {points}/100</p>
//       </div>
    
//       <div className="exercises-container">

//       {exercises.map((exercise, index) => (

//         <div key={index} className="exercise-card">
//         <Exercise
//           key={index}
//           name={exercise.name}
//           image={exercise.image}
//           onComplete={() => handleComplete(index)}
//           isCompleted={completedExercises[index]}
//         />
//         </div>
//       ))}

//       </div>
//       <div className="next-day-container">

//       {/* {points === 100 && (
//         day < 10 ? (
//         <button onClick={onNextDay} className="next-day-button">Next Day</button>)
//       ) : (
//         <button onClick={onFinish}>Finish</button>

//       )
        
// }  */}
//       {points === 100 && (
//         day < 10 ? (
//           <button onClick={onNextDay} className="next-day-button" >Next Day</button>
//         ) : (
//           <button onClick={onFinish} className="next-day-button">Finish</button>
//         )
//       )}
//     </div>

  
//     </div> 



//   );
// };

// export default Day;

import React, { useState, useEffect } from 'react';
import Exercise from './Exercise';
import './App.css';

const Day = ({ day, exercises, onNextDay, onFinish }) => {
  const [points, setPoints] = useState(0);
  const [completedExercises, setCompletedExercises] = useState(Array(10).fill(false));

  useEffect(() => {
    setPoints(0);  // Reset points to 0
    setCompletedExercises(Array(10).fill(false));  // Reset all exercises to incomplete
  }, [day]); 

  const handleComplete = (index) => {
    if (!completedExercises[index]) {
      const updatedExercises = [...completedExercises];
      updatedExercises[index] = true;
      setCompletedExercises(updatedExercises);
      setPoints(points + 10);
    }
  };

  return (
    <div>
      <div className="day-header">
        <h2>Day {day} Exercises</h2>
        <p>Total Points: {points}/100</p>
      </div>
      
      <div className="exercises-container">
        {exercises.map((exercise, index) => (
          <div key={index} className="exercise-card">
            <Exercise
              key={index}
              name={exercise.name}
              image={exercise.image}
              onComplete={() => handleComplete(index)}
              isCompleted={completedExercises[index]}
            />
          </div>
        ))}
      </div>

      <div className="next-day-container">
        {points === 100 && (
          day < 10 ? (
            <button onClick={onNextDay} className="next-day-button">Next Day</button>
          ) : (
            <button onClick={onFinish} className="next-day-button">Finish</button>
          )
        )}
      </div>
    </div>
  );
};

export default Day;

