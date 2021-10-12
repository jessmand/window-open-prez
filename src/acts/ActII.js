import Code from "../Code";
import useSetTitle from "../useSetTitle";

const code = `<a href="/blank-page" target="blank">
  Click me for a fun surprise
</a>`;

const ActII = () => {
  useSetTitle("Act II");

  return (
    <>
      <a href="/blank-page" target="blank" className="App-link">
        Click me for a fun surprise
      </a>
      <Code code={code} />
    </>
  );
};

export default ActII;
