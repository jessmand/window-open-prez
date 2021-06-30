import useSetTitle from "./useSetTitle";

const BlankPage = () => {
  useSetTitle("Blank page");

  return <p>And I have no name</p>;
};

export default BlankPage;
