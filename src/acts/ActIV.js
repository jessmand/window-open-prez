import ListReveal from "../ListReveal";
import useSetTitle from "../useSetTitle";

const Limitations = [
  "Navigating to a page via browser favorites",
  "Opening a link someone sent you or that you found somewhere else online",
  'Right clicking and using the default context menu to "Open in new tab"',
  "Duplicating an existing tab",
  "Creating a new tab with the browser and directly navigating there",
  "Command + clicking a link",
];

const ActIV = () => {
  useSetTitle("Act IV");

  return (
    <>
      <p>
        What are some ways a second "network" of tabs might be instantiated?
      </p>
      <ListReveal items={Limitations} />
    </>
  );
};

export default ActIV;
