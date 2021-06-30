import { useState } from "react";

const ListReveal = ({ items }) => {
  const [visibleItems, setVisibleItems] = useState(
    new Array(items.length).fill(false)
  );

  const showItem = (index) => () => {
    const newVisibleItems = [...visibleItems];
    newVisibleItems[index] = true;
    setVisibleItems(newVisibleItems);
  };
  return (
    <ol style={{ textAlign: "left", width: 900 }}>
      {items.map((item, index) => {
        return (
          <li key={index} style={{ marginBottom: 20 }}>
            {visibleItems[index] ? (
              item
            ) : (
              <button className="App-button" onClick={showItem(index)}>
                Reveal
              </button>
            )}
          </li>
        );
      })}
    </ol>
  );
};

export default ListReveal;
