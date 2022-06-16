import React from 'react';
import Dog from './Dog';

function DogBar({ dogData }) {
  const displayDogs = dogData.map(dog => (
    <Dog key={dog.id} dog={dog} />
  ))
  return (
    <>
      {displayDogs}
    </>
  )
}

export default DogBar;