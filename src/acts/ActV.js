import { useEffect, useState } from "react";
import Code from "../Code";
import Link from "../Link";
import useSetTitle from "../useSetTitle";

const linkCode = `const Link = ({ href, target, children }) => {
  const handleClick = (e) => {
    if (target === '_blank' || e.metaKey) {
      e.preventDefault();
      window.open(href, uuid());
    }
  };

  return (
    <a href={href} target={target} onClick={handleClick}>
      {children}
    </a>
  );
};`;

const pageWrapperCode = `const removeTab = () => {
  const allTabsString = localStorage.getItem('allTabs');
  const newAllTabs = JSON.parse(allTabsString).filter(
    (tab) => tab !== window.name
  );
  localStorage.setItem('allTabs', JSON.stringify(newAllTabs));
};

useEffect(() => {
  const allTabsString = localStorage.getItem('allTabs');
  const allTabs = allTabsString ? JSON.parse(allTabsString) : [];
  allTabs.push(window.name);
  localStorage.setItem('allTabs', JSON.stringify(allTabs));

  window.addEventListener('beforeunload', removeTab);
  return () => {
    window.removeEventListener('beforeunload', removeTab);
  };
}, []);
`;

const trackingCode = `const updateTabs = () => {
  const allTabsString = localStorage.getItem("allTabs");
  setAllTabs(allTabsString ? JSON.parse(allTabsString) : []);
}

useEffect(() => {
  window.addEventListener("storage", updateTabs);
  return () => window.removeEventListener("storage", updateTabs);
}, []);`;

const ActV = () => {
  const [allTabs, setAllTabs] = useState([]);

  const updateTabs = () => {
    const allTabsString = localStorage.getItem("allTabs");
    console.log(allTabsString);
    setAllTabs(allTabsString ? JSON.parse(allTabsString) : []);
  };

  useEffect(() => {
    window.addEventListener("storage", updateTabs);
    return () => window.removeEventListener("storage", updateTabs);
  }, []);

  useSetTitle("Act V");

  return (
    <>
      <div style={{ borderBottom: "1px solid white", padding: 30 }}>
        <h2>In the design system</h2>
        <div style={{ marginBottom: 20 }}>
          <Link href="/new-tab" target="_blank">
            My target is _blank, try clicking me
          </Link>
        </div>
        <div style={{ marginBottom: 30 }}>
          <Link href="/new-tab">Try command+clicking me</Link>
        </div>
        <Code code={linkCode} />
      </div>
      <div style={{ padding: 30 }}>
        <h2>In the app</h2>
        <p>Shift the focus to any of these tabs:</p>
        <div style={{ width: 800 }}>
          {allTabs.length === 0 && "None to show yet."}
          {allTabs.map((tab) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
                key={tab}
              >
                <div>{tab}</div>
                <button
                  className="App-button"
                  onClick={() => {
                    window.open(undefined, tab);
                  }}
                >
                  Go to tab
                </button>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: 30 }}>
          <h4>On each page:</h4>
          <Code code={pageWrapperCode} />
        </div>
        <div style={{ marginTop: 30 }}>
          <h4>In the tracking element:</h4>
          <Code code={trackingCode} />
        </div>
      </div>
    </>
  );
};

export default ActV;
