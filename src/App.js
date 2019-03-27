import React, { Component } from 'react';
import './App.css';
import ClickAway from './components/open-menu';
import ScenePlace from './components/scene';
// import { createStore } from "redux";
// import { connect, Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickAway/> {/*open menu*/}
        <ScenePlace/>
      </div>
    );
  }
}

export default App;
