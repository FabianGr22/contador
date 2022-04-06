import { useState } from "react";

function App() {
  const [cuenta, setCuenta] = useState(0);
  const [paso, setPaso] = useState(1);

  const handleClick = () => {
    setCuenta(cuenta + paso);
  };

  const handleClick1 = () => {
    setCuenta(cuenta - paso);
  };

  const handleClick0 = () => {
    setCuenta(cuenta - cuenta);
    setPaso(1);
  };
  

  const handleInputChange = (e) => {
    if (isNaN(e.target.value)) {
      return;
    }
    setPaso(Number(e.target.value));
  }

  return (
    <div className="App">
      <div className="mx-auto container card m-4 p-4 shadow-lg">
        <h1>Contador</h1>
        <hr />
        <h2 className="text-center">{cuenta}</h2>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "5px",
          }}
        >
          <div class="input-group me-3">
            <span class="input-group-text" id="basic-addon1">
                Paso
            </span>
            <input
              name="paso"
              id="paso"
              value={paso}
              type="text"
              onChange={handleInputChange}
              class="form-control"
              aria-describedby="basic-addon1"
            />
          </div>

          <button
            type="button"
            onClick={() => {
              handleClick();
            }}
            className="btn btn-outline-danger"
          >
            +1
          </button>
          <button
            type="button"
            onClick={() => {
              handleClick1();
            }}
            className="btn btn-outline-danger mx-3"
          >
            -1
          </button>
          <button
            type="button"
            onClick={() => {
              handleClick0();
            }}
            className="btn btn-outline-danger"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
