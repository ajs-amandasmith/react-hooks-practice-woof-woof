import React, { useState, useEffect } from "react";
import DogBar from "./DogBar";

function App() {
  const [dogData, setDogData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then(r => r.json())
      .then (doggos => setDogData(doggos))
  }, [])

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">
        <DogBar dogData={dogData} />
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info"></div>
      </div>
    </div>
  );
}

export default App;
