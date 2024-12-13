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
      <div class="d-flex justify-content-around grid text-center text-bg-dark p-3 rounded-top-5 mb-2 col-12">
        <img src="src/assets/web-grande.png" class="img-fluid" width="300px" height="180px"></img>
      </div>
      <div class="d-flex justify-content-around grid text-bg-dark p-3 rounded-bottom-5 col-12">
        <div></div>
        <div class="text-start p-3 mb-2 bg-success text-white rounded-3">
          <form>
            <div class="mb-3">
              <label for="exampleInputDocument" class="form-label fs-4">
                Ingrese su documento
              </label>
              <input
                type="documet"
                class="form-control"
                id="exampleInputDocument"
                aria-describedby="docHelp"
              ></input>
              <div id="emailHelp" class="form-text">
                no use ningun character especial, solo numero.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label fs-4">
                Contraseña
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              ></input>
            </div>
            <button type="submit" class="btn btn-primary fs-4">
              Entrar
            </button>
          </form>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default App;
