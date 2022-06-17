import React, { useState } from 'react';

function DogInfo({ dog, updateGoodDog }) {
  const [isGoodUpdate, setIsGoodUpdate] = useState(dog.isGoodDog)
  console.log(isGoodUpdate)

  const handleClick = () => {
    setIsGoodUpdate(!isGoodUpdate)
    fetch(`http://localhost:3001/pups/${dog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        isGoodDog: !isGoodUpdate
      })
    })
      .then(r => r.json())
      .then(updatedDog => updateGoodDog(updatedDog))
  }

  return (
    <>
      <img alt="dog.name" src={dog.image}></img>
      <h2>{dog.name}</h2>
      <button onClick={handleClick}>{isGoodUpdate ? "Good Dog!" : "Bad Dog!"}</button>
    </>
  )
}

export default DogInfo;