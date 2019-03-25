import React, { Component } from 'react';
import './App.css';
import ClickAway from './components/open-menu';
import Model from './components/model';
import ScenePlace from './components/scene';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickAway/> {/*open menu*/}
        <Model/>
        <ScenePlace/>
      </div>
    );
  }
}

export default App;
