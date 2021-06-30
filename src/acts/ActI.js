import Code from "../Code";
import useSetTitle from "../useSetTitle";

const code = `<a href="/blank-page" target="_blank">
  Click me to open a new tab
</a>`;

const ActI = () => {
  useSetTitle("Act I");

  return (
    <>
      <a href="/blank-page" target="_blank" className="App-link">
        Click me to open a new tab
      </a>
      <Code code={code} />
    </>
  );
};

export default ActI;
