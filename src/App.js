import React from 'react';
import './App.css';
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact
                 render={props => <Home {...props} />}/>
          <Route path="/search" exact
                 component={SearchPage}/>
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
