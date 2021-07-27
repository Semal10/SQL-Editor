import React from "react";
import { message } from "antd";
import CollapseContent from "./Collapse";
import { Save, Copy, Download } from "../../../icons";
import "./dashboard.css";

const Dashboard = ({
  activeContent,
  map,
  setMap,
  saveState,
  activeKey,
  open,
}) => {
  const download = (content, filename, contentType) => {
    if (!contentType) contentType = "application/sql";
    var a = document.createElement("a");
    var blob = new Blob([content], { type: contentType });
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;
    a.click();
  };

  const handleSaveButton = () => {
    if (saveState === "Custom") {
      let updatedMap = { ...map };
      updatedMap[activeKey] = { ...map[activeKey], content: activeContent };
      setMap(updatedMap);
      message.success("Saved!");
    }
  };

  const handleCopyButton = () => {
    navigator.clipboard.writeText(activeContent);
    message.success("Copied!");
  };

  const handleDownloadButton = () => {
    download(activeContent, "categories.sql", "text/sql");
    message.success("Downloaded!");
  };

  return (
    <div
      className="dashboard"
      style={
        !open
          ? { position: "absolute", left: "-250px", opacity: "0" }
          : { left: "0px", opacity: "1", transition: "all 3s ease" }
      }
    >
      <div className="dashboard-nav">
        <div className="save-button" onClick={handleSaveButton}>
          <Save />
          <div className="onhover-save">Save</div>
        </div>
        <div className="save-button" onClick={handleCopyButton}>
          <Copy />
          <div className="onhover-save">Copy</div>
        </div>
        <div className="download-button" onClick={handleDownloadButton}>
          <Download />
          <div className="onhover-download">Download</div>
        </div>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-label">SCHEMAS</div>
        <CollapseContent />
      </div>
    </div>
  );
};

export default Dashboard;
