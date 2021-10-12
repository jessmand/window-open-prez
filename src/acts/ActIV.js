import ListReveal from "../ListReveal";
import useSetTitle from "../useSetTitle";

const Limitations = [
  "Creating a new tab with the browser and directly navigating there",
  "Opening a link someone sent you or that you found somewhere else online",
  "Navigating to a page via browser favorites",
  'Right clicking and using the default context menu to "Open in new tab"',
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
