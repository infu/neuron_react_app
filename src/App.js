import logo from "./logo.svg";
import { exec } from "neutron-tools";
import { neutron_id } from "./config";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          onClick={() => {
            exec("call_dialog", {
              canister: neutron_id,
              method: "react_hello_world",
              args: "Anything",
            })
              .then((x) => alert(JSON.stringify(x)))
              .catch((err) => {
                console.log("ERR", err);
              });
          }}
        >
          Backend call
        </button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
