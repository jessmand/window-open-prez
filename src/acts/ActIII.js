import { useState } from "react";
import Code from "../Code";
import ListReveal from "../ListReveal";
import useSetTitle from "../useSetTitle";

const code = `window.open("/new-tab", newTabName);`;

const Findings = [
  "Running window.open for a tab name that already exists shifts focus to that tab",
  "If I rename a tab then use the old name to try to open it, a new tab will be opened; if I  use the new name to try to open it, the same tab will be focused",
  "A tab whose route has been changed can still be focused",
  "Focusing a tab using a url will load that url, but opening it with an undefined url will not change that tab's url",
  "All tabs I open this way can focus each other, it's not just parent -> child",
  "If I open a tab in a different way, I can't open other tabs, even if I know their names",
];

const ActIII = () => {
  const [newTabName, setNewTabName] = useState("");

  const openNewTab = () => {
    window.open("/new-tab", newTabName);
    setNewTabName("");
  };

  useSetTitle("Act III");

  return (
    <>
      <p>Give your new tab a name then click to open it</p>
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
          Open tab
        </button>
      </div>
      <Code code={code} />
      <h2>The findings</h2>
      <ListReveal items={Findings} />
    </>
  );
};

export default ActIII;
