import { Tabs } from "antd";
import "antd/dist/antd.css";

const { TabPane } = Tabs;

const TabNav = ({
  newTabIndex,
  setNewTabIndex,
  activeKey,
  setActiveKey,
  map,
  setMap,
  setActiveContent
}) => {

  const onChange = (activeKey) => {
    setActiveKey(activeKey);
    setActiveContent(map[activeKey].content);
  };

  const onEdit = (targetKey, action) => {
    if (action === "onChange") onChange(targetKey);
    if (action === "add") add(targetKey);
    if (action === "remove") remove(targetKey);
  };

  const add = () => {
    const activeKey = `${newTabIndex}`;
    let newMap = map;
    newMap[newTabIndex] = {title:`Tab ${newTabIndex}`,content:`Content of Tab ${newTabIndex}`};
    setMap(newMap);
    setNewTabIndex(newTabIndex + 1);
    setActiveKey(activeKey);
    setActiveContent(map[activeKey].content);
  };

  const remove = (targetKey) => {
    let newActiveKey = activeKey;
    let lastIndex;
    Object.keys(map).forEach((pane, i) => {
      if (pane === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = Object.keys(map).filter((pane) => pane !== targetKey);
    console.log(newPanes);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex];
      } else {
        newActiveKey = newPanes[0];
      }
    }

    let newMap = {...map};
    delete newMap[targetKey];
    setMap(newMap);
    setActiveKey(newActiveKey);
    setActiveContent(map[activeKey].content);
  };

  return (
    <Tabs
      type="editable-card"
      onChange={onChange}
      activeKey={activeKey}
      onEdit={onEdit}
    >
      {Object.keys(map).map((pane) => (
        <TabPane
          tab={<div className="tab">{`Tab ${pane}`}</div>}
          key={pane}
          closable={pane!=="0"}
        >
        </TabPane>
      ))}
    </Tabs>
  );
};

export default TabNav;
