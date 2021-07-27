import { useState } from "react";
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";
import '../../main.css';

function App() {

  const [execStatus , setExecStatus] = useState('Idle')
  const [saveState , setSaveState] = useState('Custom');
  const [open , setOpen] = useState(window.innerWidth<=600 ? false : true);

  return (
    <div className="app">
      <Navbar setExecStatus={setExecStatus} saveState={saveState} setSaveState={setSaveState} open={open} setOpen={setOpen}/>
      <Home execStatus={execStatus} saveState={saveState} open={open} setOpen={setOpen}/>
    </div>
  );
}

export default App;
