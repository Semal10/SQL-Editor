import { useEffect, useCallback, useRef } from "react";
import { message } from "antd";
import { basicSetup } from "@codemirror/basic-setup";
import { EditorState } from "@codemirror/state";
import { defaultTabBinding } from "@codemirror/commands";
import { EditorView, keymap } from "@codemirror/view";
import { sql } from "@codemirror/lang-sql";
import "./editor.css";

const Editor = ({
  activeKey,
  map,
  setMap,
  activeContent,
  setActiveContent,
  saveState,
}) => {
  const editor = useRef();

  const saveKeyHandler = useCallback(
    (e) => {
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
    },
    [activeContent, map, saveState]
  );
  
  const autoSaveHandler = useCallback(
    (value) => {
      let updatedMap = { ...map };
      updatedMap[activeKey] = {
        ...map[activeKey],
        content: value,
      };
      if (saveState === "Auto") setMap(updatedMap);
      setActiveContent(value);
    }, [activeContent, map, saveState]);

  useEffect(() => {
    document.addEventListener("keydown", saveKeyHandler);
    return () => {
      document.removeEventListener("keydown", saveKeyHandler);
    };
  }, [saveKeyHandler]);

  useEffect(() => {
    const state = EditorState.create({
      doc: map[activeKey].content,
      extensions: [
        basicSetup,
        keymap.of([defaultTabBinding]),
        sql(),
        EditorView.updateListener.of((v) => {
          if (v.docChanged) {
            const value = v.state.doc.text[0];
            autoSaveHandler(value);
          }
        }),
      ],
    });
    let view = new EditorView({
      state,
      parent: editor.current,
    });
    return () => {
      view.destroy();
    };
  }, [saveState, activeKey]);

  return (
    <div ref={editor} className="custom-editor"></div>
  );
};

export default Editor;
