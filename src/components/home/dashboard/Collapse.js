import React from "react";
import { Collapse } from "antd";
import {Database, Tables, Table } from "../../../icons";

const { Panel } = Collapse;

export const CollapseContent = () => {

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

  return (
    <Collapse className="database-collapse" defaultActiveKey={["1"]} ghost>
      <Panel className="database-panel" header={databaseLabel("Atlan")} key="1">
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
      <Panel className="database-panel" header={databaseLabel("Semal")} key="2">
        <Collapse defaultActiveKey={["1"]} ghost>
          <Panel header={tablesLabel("Tables")} key="1">
            <p>{tableLabel("Table1")}</p>
            <p>{tableLabel("Table2")}</p>
            <p>{tableLabel("Table3")}</p>
            <p>{tableLabel("Table4")}</p>
          </Panel>
        </Collapse>
      </Panel>
      <Panel className="database-panel" header={databaseLabel("Test")} key="3">
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
  );
};

export default CollapseContent;
