import React from 'react';
import './App.css';
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Switch>
          <Route path="/"
                 render={props => <SearchPage {...props} />}/>
          <Route path="/search"
                 render={props => <SearchPage {...props} />}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
