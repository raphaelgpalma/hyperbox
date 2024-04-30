import React from "react";
import logoImg from './logo.png';
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <img src={logoImg} alt="Logo" />;
      <SearchBar placeholder="Seach with HyperCube" />
    </div>
  );
}

export default App;
