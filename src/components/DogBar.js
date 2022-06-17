import React from 'react';
import Dog from './Dog';

function DogBar({ dogData, handleClick }) {
  const displayDogs = dogData.map(dog => (
    <Dog key={dog.id} dog={dog} handleClick={handleClick} />
  ))
  return (
    <>
      {displayDogs}
    </>
  )
}

export default DogBar;