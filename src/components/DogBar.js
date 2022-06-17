import React from 'react';
import Dog from './Dog';

function DogBar({ dogData, handleClick, filter }) {

  const displayDogs = dogData.filter(dog => {
    if (filter) {
      return dog.isGoodDog === true;
    } else {
      return dog;
    }
  }).map(dog => (
    <Dog key={dog.id} dog={dog} handleClick={e => handleClick(dog)} />
  ))
  return (
    <>
      {displayDogs}
    </>
  )
}

export default DogBar;