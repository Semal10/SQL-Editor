import React from "react";
import { Button, message } from "antd";
import { HamburgerOpen, HamburgerClose } from "../../icons";
import "./navbar.css";

const Navbar = ({ setExecStatus, saveState, setSaveState , open, setOpen }) => {
  const handleSaveButton = () => {
    if (saveState === "Custom") {
      setSaveState("Auto");
      message.success("Auto Save Enabled!");
    } else {
      setSaveState("Custom");
      message.success("Auto Save Disabled!");
    }
  };

  const handleRunButton = () => setExecStatus("Run");

  const handleStopButton = () => setExecStatus("Stop");

  return (
    <div className="navbar">
      <div className="nav-left">
        {window.innerWidth<=600 ? (
          <div
            className='hamburger'
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <HamburgerClose /> : <HamburgerOpen />}
          </div>
        ) : <></> }
        <span className="navbar-heading">SQL Editor</span>
      </div>
      <div className="run-buttons">
        <Button type="primary" onClick={handleSaveButton}>
          {saveState === "Custom" ? "Auto" : "Custom"}Save
        </Button>
        <div className="run-button" onClick={handleRunButton}>
          Run
        </div>
        <Button type="danger" onClick={handleStopButton}>
          Stop
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
