import React from "react";
import "./App.css";
import logo from "./assets/nasa-logo.png";
import NasaPhotos from "./components/NasaPhotos";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img className="App-logo" src={logo} alt="nasa logo" />
      </div>
      <NasaPhotos />
    </div>
  );
}

export default App;
