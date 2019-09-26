import * as React from "react";
import { render } from "react-dom";
import { css } from "@emotion/core";
import "./styles.css";

const style = css(`color: red; font-size: 2em;`);
function App() {
  return (
    <div className="App" css={style}>
      for real?
      <h1>Hello CodeSandbox</h1>
      <h2>test</h2>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
