import Code from "../Code";
import useSetTitle from "../useSetTitle";

const code = `<a href="/blank-page" target="blank">
  Click me to open a new tab
</a>`;

const ActII = () => {
  useSetTitle("Act II");

  return (
    <>
      <a href="/blank-page" target="blank" className="App-link">
        Click me to open a new tab
      </a>
      <Code code={code} />
    </>
  );
};

export default ActII;
