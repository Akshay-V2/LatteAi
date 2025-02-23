import { useState } from "react";
import "./App.css";

import Button from "./components/Button";

function App() {

  return (
    <div className="main">
      <div className="text-input">
        <input type="text" placeholder="Type your equation in words or describe it" className="input"></input>
      </div>

      <div className="tools-right">
        <Button text="Quit" keybind="Esc" highlight="false"></Button>
        <Button text="Send" keybind="Ctrl+Enter" highlight="true"></Button>
      </div>
    </div>
  );
}

export default App;
