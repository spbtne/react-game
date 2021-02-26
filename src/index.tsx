import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Settings from "./containers/Settings/Settings";
import Board from "./containers/Board/Board";

import './index.scss'
import Menu from "./containers/Menu/Menu";
import Statistics from "./containers/Statistics/Statistics";

const App = () => {
  return (
    <div className="app-wrapper">
      <h1>Tic Tac Toe</h1>
      <Statistics/>
      <Router>
        <Switch>
         <Route exact path='/'> 
           <Board/>
           <Menu/>
         </Route>
         <Route path='/settings'><Settings /></Route>
         </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
