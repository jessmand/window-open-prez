import { CodeBlock, monokaiSublime } from "react-code-blocks";

const Code = ({ code }) => {
  return (
    <div className="App-code-block">
      <CodeBlock
        text={code}
        language="jsx"
        showLineNumbers={false}
        theme={monokaiSublime}
      />
    </div>
  );
};

export default Code;
