import React from "react";
import { Button , message} from "antd";
import { Save, Copy, Download, Database, Tables, Table } from "../../icons";
import { Collapse } from "antd";

const { Panel } = Collapse;

const Dashboard = ({ activeContent, setActiveContent, map, setMap, saveState, activeKey}) => {
  const download = (content, filename, contentType) => {
    if (!contentType) contentType = "application/sql";
    var a = document.createElement("a");
    var blob = new Blob([content], { type: contentType });
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;
    a.click();
  };

  const databaseLabel = (title) => (
    <span className="label">
      <Database />
      <span className="label-content">{title}</span>
    </span>
  );
  const tablesLabel = (title) => (
    <span className="label">
      <Tables />
      <span className="label-content">{title}</span>
    </span>
  );
  const tableLabel = (title) => (
    <span className="label">
      <Table />
      <span className="label-content">{title}</span>
    </span>
  );

  const handleSaveButton = () => {
    if(saveState==='Custom') {
      let updatedMap = { ...map };
      updatedMap[activeKey] = { ...map[activeKey], content: activeContent };
      setMap(updatedMap);
      message.success('Saved!');
    }

  }

  const handleCopyButton = () => {
    navigator.clipboard.writeText(activeContent);
    message.success('Copied!');
  }

  const handleDownloadButton = () => {
    download(activeContent, "categories.sql", "text/sql");
    message.success('Downloaded!');
  }

  return (
    <div className="dashboard">
      <div className="dashboard-nav">
        {/* <Button className='save-button'>Save</Button> */}
        <div className="save-button" onClick={handleSaveButton}>
          <Save />
          <div className="onhover-save">Save</div>
        </div>
        <div
          className="save-button"
          onClick={handleCopyButton}
        >
          <Copy />
          <div className="onhover-save">Copy</div>
        </div>
        <div
          className="download-button"
          onClick={handleDownloadButton}
        >
          <Download />
          <div className="onhover-download">Download</div>
        </div>
        {/* <Button className="copy-button">Copy</Button>
        <Button className="download-button">Download</Button> */}
      </div>
      <div className="dashboard-content">
        <div className="dashboard-label">SCHEMAS</div>
        {/* <div className="heading-wrapper">
          <div className="vertical-border"></div>
          <div className="category">Databases</div>
        </div>
        <div className="list">
          <span>Semal</span>
          <span>Semal2</span>
          <span>Semal3</span>
        </div>
        <div className="heading-wrapper">
          <div className="vertical-border"></div>
          <div className="category">Tables</div>
        </div>
        <div className="list">
          <span>Semal</span>
          <span>Semal2</span>
          <span>Semal3</span>
        </div> */}
        <Collapse className="database-collapse" defaultActiveKey={["1"]} ghost>
          <Panel
            className="database-panel"
            header={databaseLabel("Atlan")}
            key="1"
          >
            <Collapse defaultActiveKey={["1"]} ghost>
              <Panel
                className="database-panel"
                header={tablesLabel("Tables")}
                key="1"
              >
                <p>{tableLabel("Table1")}</p>
                <p>{tableLabel("Table2")}</p>
                <p>{tableLabel("Table3")}</p>
                <p>{tableLabel("Table4")}</p>
              </Panel>
            </Collapse>
          </Panel>
          <Panel
            className="database-panel"
            header={databaseLabel("Semal")}
            key="2"
          >
            <Collapse defaultActiveKey={["1"]} ghost>
              <Panel header={tablesLabel("Tables")} key="1">
                <p>{tableLabel("Table1")}</p>
                <p>{tableLabel("Table2")}</p>
                <p>{tableLabel("Table3")}</p>
                <p>{tableLabel("Table4")}</p>
              </Panel>
            </Collapse>
          </Panel>
          <Panel
            className="database-panel"
            header={databaseLabel("Test")}
            key="3"
          >
            <Collapse defaultActiveKey={["1"]} ghost>
              <Panel header={tablesLabel("Tables")} key="1">
                <p>{tableLabel("Table1")}</p>
                <p>{tableLabel("Table2")}</p>
                <p>{tableLabel("Table3")}</p>
                <p>{tableLabel("Table4")}</p>
              </Panel>
            </Collapse>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default Dashboard;
