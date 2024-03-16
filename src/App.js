import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div>
      <Logo />
      <div className="container">
        <div className="container-cf">
          <ConvertCelsiusToFahrenheit />
        </div>
        <div className="container-fc">
          <ConvertFahrenheitToCelsius />
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return <h1 className="logo">TEMPERATURE CONVERTER</h1>;
}

function ConvertCelsiusToFahrenheit() {
  const [celsius, setCelsius] = useState("");
  const [Fahrenheit, setFahrenheit] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    if (!celsius) return;

    const tempFahrenheit = (celsius * (9 / 5) + 32).toFixed(2);

    setFahrenheit(tempFahrenheit);
    setCelsius("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="form1">
        <h2>Celsius to Fahrenheit</h2>
        <label>
          Celsius temperature{" "}
          <input
            type="number"
            placeholder="Celsius"
            value={celsius}
            onChange={(e) => setCelsius(Number(e.target.value))}
          />
        </label>
        <button>Convert</button>
      </form>
      {Fahrenheit > 0 || Fahrenheit < 0 ? (
        <h2 className="total">{Fahrenheit}°F</h2>
      ) : (
        ""
      )}
    </div>
  );
}

function ConvertFahrenheitToCelsius() {
  const [fahrenheit, setFahrenheit] = useState("");
  const [celsius, setCelsius] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    if (!fahrenheit) return;

    const tempCelsius = (((fahrenheit - 32) * 5) / 9).toFixed(2);

    setCelsius(tempCelsius);
    setFahrenheit("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Fahrenheit to Celsius</h2>
        <label>
          Fahrenheit temperature{" "}
          <input
            type="number"
            placeholder="Fahrenheit"
            value={fahrenheit}
            onChange={(e) => setFahrenheit(Number(e.target.value))}
          />
        </label>
        <button>Convert</button>
      </form>
      {celsius > 0 || celsius < 0 ? <h2 className="total">{celsius}°C</h2> : ""}
    </div>
  );
}
