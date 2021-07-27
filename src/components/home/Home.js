import React from "react";
import { useLocalStorage } from "../../hooks/localStorage";
import Workspace from "./workspace/Workspace";
import Dashboard from "./dashboard/Dashboard";

const mapKeyToContent = {
  0: {
    title: "Tab 0",
    content:
      "SELECT First_Name, Nickname FROM Friends WHERE Nickname LIKE '%brain%'",
  },
};

const Home = ({ execStatus, saveState , open }) => {
  const [newTabIndex, setNewTabIndex] = useLocalStorage("newindex", 1);
  const [activeKey, setActiveKey] = useLocalStorage("activeKey", 0);
  const [map, setMap] = useLocalStorage("map", mapKeyToContent);
  const [activeContent, setActiveContent] = useLocalStorage('activeContent',
    "SELECT First_Name, Nickname FROM Friends WHERE Nickname LIKE '%brain%'"
  );

  return (
    <div className="home">
      <Dashboard
        activeContent={activeContent}
        map={map}
        setMap={setMap}
        saveState={saveState}
        activeKey={activeKey}
        open={open}
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
