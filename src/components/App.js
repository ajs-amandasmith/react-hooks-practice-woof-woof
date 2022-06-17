import React, { useState, useEffect } from "react";
import DogBar from "./DogBar";
import DogInfo from "./DogInfo";

function App() {
  const [dogData, setDogData] = useState([]);
  const [infoDog, setInfoDog] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then(r => r.json())
      .then (doggos => setDogData(doggos))
  }, [])

  const handleInfoDog = (dog) => {
    setInfoDog(dog);
  }

  const updateGoodDog = (dog) => {
    const updatedDoggos = dogData.map(doggo => {
      if (doggo.id === dog.id) return dog;
      return doggo;
    })
    setDogData(updatedDoggos)
    setInfoDog(dog)
  }

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">
        <DogBar dogData={dogData} handleClick={handleInfoDog} />
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          {infoDog.length === 0 ? null :
            <DogInfo dog={infoDog} updateGoodDog={updateGoodDog} />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
