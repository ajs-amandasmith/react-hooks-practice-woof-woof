import React from 'react';

function Dog({ dog, handleClick }) {

  return (
    <span onClick={(e) => handleClick(dog)}>
      {dog.name}
    </span>
  )
}

export default Dog;