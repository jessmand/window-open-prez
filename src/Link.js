import { v4 as uuid } from "uuid";

const Link = ({ href, target, children }) => {
  const handleClick = (e) => {
    if (target === "_blank" || e.metaKey) {
      e.preventDefault();
      window.open(href, uuid());
    }
  };

  return (
    <a href={href} target={target} onClick={handleClick} className="App-link">
      {children}
    </a>
  );
};

export default Link;
