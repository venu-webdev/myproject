import React from 'react';
// import pushupsImage from './images/pushups.jpg';
// import Squats from './images/squats.jpg';


const Exercise = ({ name, image, onComplete, isCompleted }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt={name} width="150" />
      <button onClick={onComplete} disabled={isCompleted}>
        {isCompleted ? 'Completed' : 'Complete'}
      </button>
    </div>
  );
};

export default Exercise;
