import React from 'react';
import './App.css';
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <div className="app">
      <Header/>
      <Home/>
      <Banner/>
    </div>
  );
}

export default App;
