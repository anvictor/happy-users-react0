import React, { Component } from 'react';
import './App.css';
import ScenePlace from './components/scene';
import OpenMenu from './components/open-menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScenePlace/>
        <OpenMenu/>{/*open menu*/}
      </div>
    );
  }
}

export default App;
