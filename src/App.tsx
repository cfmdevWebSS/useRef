import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SimpleRef from "./SimpleRef";
import SimpleCallbackRef from "./SimpleCallbackRef";
import SimpleCallbackRefRerender from "./SimpleCallbackRefRerender";
import CallbackRefDynamicChild from "./CallbackRefDynamicChild";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <SimpleRef />
        <br />
        <SimpleCallbackRef />
        <br />
        <SimpleCallbackRefRerender />
        <br />
        <CallbackRefDynamicChild />
      </header>
    </div>
  );
}

export default App;
