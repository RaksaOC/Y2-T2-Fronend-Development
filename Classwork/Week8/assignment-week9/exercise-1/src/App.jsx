import React, { useState } from "react";
function App() {
  /* You will need to use a boolean state to manage the weather */
  const [title, setTitle]=useState("TODO");
  const [background, setBackground]=useState("rgba(77, 77, 77, 0.904)");

  function onSunClick(e) {
    setBackground("yellow");
    setTitle(e.target.value);
  }

  function onRainClick(e) {
    // Complete this code when we click on Sunny Time
    setBackground("blue");
    setTitle(e.target.value);

  }


  return (
    <main style={{backgroundColor: background}}>
      <h1 >{title}!</h1>
      <button onClick={onSunClick} value="Sunny Time">Sunny Time</button>
      <button onClick={onRainClick} value="Rain Time">Rain Time</button>
    </main>
  );  
}

export default App;
