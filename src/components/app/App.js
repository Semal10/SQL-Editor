import { useState } from "react";
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";
import '../../main.css';

function App() {

  const [execStatus , setExecStatus] = useState('Idle')
  const [saveState , setSaveState] = useState('Custom');

  return (
    <div className="app">
      <Navbar setExecStatus={setExecStatus} saveState={saveState} setSaveState={setSaveState}/>
      <Home execStatus={execStatus} saveState={saveState}/>
    </div>
  );
}

export default App;
