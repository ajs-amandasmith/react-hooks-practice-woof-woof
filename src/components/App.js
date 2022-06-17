import React, { useState, useEffect } from "react";
import DogBar from "./DogBar";
import DogInfo from "./DogInfo";

function App() {
  const [dogData, setDogData] = useState([]);
  const [infoDog, setInfoDog] = useState([]);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then(r => r.json())
      .then (doggos => setDogData(doggos))
  }, [infoDog])

  const handleInfoDog = (dog) => {
    setInfoDog(dog);
  }

  const updateGoodDog = (dog) => {
    const updatedDoggos = dogData.map(doggo => {
      if (doggo.id === dog.id) return dog;
      return doggo;
    })
    setDogData(updatedDoggos)
  }

  const handleFilterClick = () => {
    setFilter(!filter);
  }

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={handleFilterClick}>Filter good dogs: {filter ? 'ON' : 'OFF'}</button>
      </div>
      <div id="dog-bar">
        <DogBar dogData={dogData} handleClick={handleInfoDog} filter={filter} />
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
