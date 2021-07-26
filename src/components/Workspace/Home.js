import React, { useState } from "react";
import Workspace from "./Workspace";
import Dashboard from "./Dashboard";

const mapKeyToContent = {
  0: {
    title: "Tab 0",
    content:
      "SELECT First_Name, Nickname FROM Friends WHERE Nickname LIKE '%brain%'",
  },
};

const useLocalStorage = (key, initialValue) => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
};

const Home = ({ execStatus, saveState }) => {
  const [newTabIndex, setNewTabIndex] = useLocalStorage("newindex", 1);
  const [activeKey, setActiveKey] = useLocalStorage("activeKey", 0);
  const [map, setMap] = useLocalStorage("map", mapKeyToContent);
  const [activeContent, setActiveContent] = useState(
    "SELECT First_Name, Nickname FROM Friends WHERE Nickname LIKE '%brain%'"
  );

  return (
    <div className="home">
      <Dashboard
        activeContent={activeContent}
        setActiveContent={setActiveContent}
        map={map}
        setMap={setMap}
        saveState={saveState}
        activeKey={activeKey}
      />
      <Workspace
        activeContent={activeContent}
        setActiveContent={setActiveContent}
        execStatus={execStatus}
        saveState={saveState}
        newTabIndex={newTabIndex}
        setNewTabIndex={setNewTabIndex}
        activeKey={activeKey}
        setActiveKey={setActiveKey}
        map={map}
        setMap={setMap}
      />
    </div>
  );
};

export default Home;
