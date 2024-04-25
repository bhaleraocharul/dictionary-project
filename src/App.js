import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer className="App-footer">
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/bhaleraocharul/react-weather-forecast/tree/master"
              target="_blank"
              rel="noreferrer"
            >
              Charul Bhalerao
            </a>
            , is{" "}
            <a
              href="https://github.com/bhaleraocharul/react-weather-forecast/tree/master"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github{" "}
            </a>
            and hosted on{" "}
            <a
              href="https://react-weather-forecast-cb.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify💖
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
