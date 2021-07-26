import React from "react";
import Editor from "./Editor";
import TabNav from "./Tabs";
import data from "../../../helpers/data";
import { Table } from "antd";
import { CSVDownloader } from "react-papaparse";

const columns = data.data[0]
  .filter((_, idx) => {
    return idx < data.data[0].length - 1;
  })
  .map((item) => {
    return {
      title: item,
      dataIndex: item,
      key: item,
    };
  });

const dataSource = data.data
  .filter((_, idx) => {
    return idx > 0;
  })
  .map((row) => {
    const obj = {};
    row.forEach((item, idx) => {
      if (idx === row.length - 1) return;
      obj[columns[idx].key] = item;
    });
    return obj;
  });

const queryColumns = [
  { title: "Time", dataIndex: "Time", key: "Time" },
  { title: "Action", dataIndex: "Action", key: "Action" },
  { title: "Response", dataIndex: "Response", key: "Response" },
  { title: "Duration", dataIndex: "Duration", key: "Duration" },
];

const queryDataSource = [
  {
    key: 1,
    Time: `17:14:10`,
    Action: `SELECT * FROM categories`,
    Response: `8 row(s) returned`,
    Duration: `0.012 sec`,
  },
  {
    key: 2,
    Time: `18:14:10`,
    Action: `SELECT * FROM categories`,
    Response: `8 row(s) returned`,
    Duration: `0.013 sec`,
  },
];

const Workspace = ({ activeContent, setActiveContent, execStatus ,saveState, newTabIndex, setNewTabIndex, activeKey, setActiveKey, map,setMap}) => {

  return (
    <div className="workspace">
      <div className="workspace-nav">
        <TabNav
          newTabIndex={newTabIndex}
          setNewTabIndex={setNewTabIndex}
          activeKey={activeKey}
          setActiveKey={setActiveKey}
          map={map}
          setMap={setMap}
          setActiveContent={setActiveContent}
        />
      </div>
      <div className="workspace-area">
        <div className="editor">
          <Editor
            activeKey={activeKey}
            map={map}
            setMap={setMap}
            activeContent={activeContent}
            setActiveContent={setActiveContent}
            saveState={saveState}
          />
        </div>
        <div className="output">
          <div className="result">
            <div className="result-heading-wrapper">
              <div className="result-heading">Result</div>
              {execStatus === "Run" && (
                <CSVDownloader
                  data={data.data}
                  type="button"
                  filename={"categories"}
                  bom={true}
                >
                  Download
                </CSVDownloader>
              )}
            </div>
            <div className="result-container">
              {execStatus === "Idle" ? (
                <div className='no-run-text'>No Results! Click Run Button To Execute Query</div>
              ) : (
                <>
                  {execStatus === "Run" ? (
                    <>
                      <Table
                        columns={columns}
                        dataSource={dataSource}
                        scroll={{ y: 300 }}
                      />
                    </>
                  ) : (
                    <div className='no-run-text'>Query Execution Stopped! Re-Run to find out the results</div>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="error">
            <div className="error-heading">Status</div>
            <div className="result-container">
              {execStatus === "Idle" ? (
                <div className='no-run-text'>No Status! Click Run Button To See the Status Of Query</div>
              ) : (
                <>
                  {execStatus === "Run" ? (
                    <>
                      <Table
                        columns={queryColumns}
                        dataSource={queryDataSource}
                        scroll={{ y: 100 }}
                        pagination={false}
                      />
                    </>
                  ) : (
                    <div className='no-run-text'>Query Execution Stopped! Re-Run to find out the status</div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
