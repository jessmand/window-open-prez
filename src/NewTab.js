import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { v4 as uuid } from "uuid";
import Code from "./Code";
import useRandomBgColor from "./useRandomBgColor";
import useSetTitle from "./useSetTitle";

const nameCode = `window.name`;
const renameCode = `window.name = newWindowName;`;
const navigateCode = `<a href={\`/new-tab/\${uuid()}\`}>
  Navigate to a new route
</a>`;
const newTabCode = `window.open("/new-tab", newTabName);`;
const newTabNoUrlCode = `window.open(undefined, newTabName);`;

const NewNamedTab = () => {
  const windowName = window.name;

  const [newWindowName, setNewWindowName] = useState("");
  const [newTabName, setNewTabName] = useState("");
  const [hasUrl, setHasUrl] = useState(true);

  const renameWindow = () => {
    window.name = newWindowName;
    setNewWindowName("");
  };

  const openNewTab = () => {
    window.open(hasUrl ? "/new-tab" : undefined, newTabName);
    setNewTabName("");
  };

  const location = useLocation();

  const removeTab = () => {
    const allTabsString = localStorage.getItem("allTabs");
    const newAllTabs = JSON.parse(allTabsString).filter(
      (tab) => tab !== window.name
    );
    localStorage.setItem("allTabs", JSON.stringify(newAllTabs));
  };

  useEffect(() => {
    const allTabsString = localStorage.getItem("allTabs");
    const allTabs = allTabsString ? JSON.parse(allTabsString) : [];
    allTabs.push(window.name);
    localStorage.setItem("allTabs", JSON.stringify(allTabs));

    window.addEventListener("beforeunload", removeTab);
    return () => {
      window.removeEventListener("beforeunload", removeTab);
    };
  }, []);

  useSetTitle(windowName);

  useRandomBgColor();

  return (
    <>
      <p>
        Hi! My name is <b>{windowName || "___________"}</b>. My current route is{" "}
        <b>{location.pathname}</b>.
      </p>
      <Code code={nameCode} />
      <div style={{ marginTop: 40, display: "flex" }}>
        <div className="App-section">
          <h3>Change tab window</h3>
          <div style={{ display: "flex" }}>
            <input
              value={newWindowName}
              onChange={(e) => setNewWindowName(e.target.value)}
              className="App-input"
            />
            <button
              onClick={renameWindow}
              className="App-button"
              style={{ marginLeft: "10px" }}
            >
              Rename tab
            </button>
          </div>
          <Code code={renameCode} />
        </div>
        <div className="App-section">
          <h3>Change route</h3>
          <a className="App-link" href={`/new-tab/${uuid()}`}>
            Navigate to a new route
          </a>
          <Code code={navigateCode} />
        </div>
        <div className="App-section">
          <h3>Open another tab</h3>
          <div style={{ display: "flex" }}>
            <input
              value={newTabName}
              onChange={(e) => setNewTabName(e.target.value)}
              className="App-input"
            />
            <button
              onClick={openNewTab}
              className="App-button"
              style={{ marginLeft: "10px" }}
            >
              Open new tab
            </button>
          </div>
          <div>
            <input
              type="checkbox"
              checked={hasUrl}
              onChange={(e) => setHasUrl(e.target.checked)}
            />
            <span style={{ fontSize: "20px" }}>Use the /new-tab url</span>
          </div>
          <Code code={hasUrl ? newTabCode : newTabNoUrlCode} />
        </div>
      </div>
    </>
  );
};

export default NewNamedTab;
