import './App.css';
import React, { Component } from 'react'
import { Route } from "react-router-dom";
import Xss from './Xss';


class App extends Component {
  render() {
  return (
    <div className="App">
    <header className="App-header">
      <Route path="/xss"><Xss/></Route>
    </header>
    </div>
  );
}
}

export default App;
