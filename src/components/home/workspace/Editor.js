import { useEffect, useCallback } from "react";
import { message } from "antd";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/xq-light.css";
require("codemirror/mode/sql/sql");

const Editor = ({
  activeKey,
  map,
  setMap,
  activeContent,
  setActiveContent,
  saveState,
}) => {

  const saveKeyHandler = useCallback((e) => {
    if (
      e.keyCode === 83 &&
      (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
    ) {
      e.preventDefault();
      if (saveState === "Custom") { 
        console.log(activeContent);
        let updatedMap = { ...map };
        updatedMap[activeKey] = { ...map[activeKey], content: activeContent };
        setMap(updatedMap);
        message.success("Saved!");
      }
    }
  },[activeContent]);

  useEffect(() => {

    document.addEventListener("keydown", saveKeyHandler);
    return () => {
      document.removeEventListener("keydown", saveKeyHandler);
    }
  }, [saveKeyHandler]);

  const options = {
    mode: "text/x-sql",
    theme: "xq-light",
    lineNumbers: true,
  };

  const onChange = (editor, data, value) => {
    let updatedMap = { ...map };
    updatedMap[activeKey] = { ...map[activeKey], content: value };
    if (saveState === "Auto") setMap(updatedMap);
    setActiveContent(value);
  };

  

  return (
    <CodeMirror
      className="custom-editor-style"
      value={map[activeKey].content}
      options={options}
      onChange={onChange}
    />
  );
};

export default Editor;
