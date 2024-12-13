import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap first
import "./index.css"; // Your custom styles after Bootstrap

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div class="d-flex justify-content-around grid text-center col-12 p-3 mb-2 bg-transparent text-body">
      
    </div>
      <div class="d-flex justify-content-around grid text-center col-12 p-3 mb-2 bg-success text-white">
        <div></div>
        <div class="text-bg-dark p-3 rounded-3">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address goes here
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else pls
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              ></input>
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              ></input>
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default App;