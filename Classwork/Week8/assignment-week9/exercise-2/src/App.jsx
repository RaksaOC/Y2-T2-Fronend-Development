import React from "react";
import { useState } from "react";
function App() {
  const [input, setInput]=useState("");
  /* You will need to use a boolean state to keep the value of the text entered */

  /* You will need a function to handle a key pressed on the first input and update the state*/
  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input onChange={e=>setInput(e.target.value)}/>

      <p>
        <label>Here is the text in upper case</label>

        {/* This input will need to display the text entered in lower case */}
        <input disabled  value={input.toUpperCase()}/>
      </p>
    </main>
  );
}

export default App;
