import { useEffect, useState } from "react";
import "./App.css";

import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

import Button from "./components/Button";

function App() {
  const [mode, setMode] = useState("launch");

  const handleModeChange = (newMode) => {
    setMode(newMode);
  }

  return (
    <div className="main">
      <div className="text-input">
        {mode === "launch" ? <input type="text" placeholder="Type your equation in words or describe it" className="input"></input> : mode === "latex" ? <div className="latex"><Latex>$\frac{3}{4}$</Latex></div> : null}
      </div>

      <div className="tools">
        {/* <select name="modelSelector" className="model-selector">
          <option value="deepseek">Deepseek R1</option>
          <option value="chatgpt-o1">ChatGPT o1</option>
          <option value="claude">Claude</option>
          <option value="llama">Llama</option>
          <option value="gemini">Gemini</option>
        </select> */}
        
        <div onClick={() => {handleModeChange("launch")}}><Button text="Quit" keybind="Esc" highlight="false"></Button></div>
        <div className="spacer"></div>
        <div onClick={() => {handleModeChange("latex")}}><Button text="Send" keybind="Ctrl+Enter" highlight="true"></Button></div>
      </div>

    </div>
  );
}

export default App;
