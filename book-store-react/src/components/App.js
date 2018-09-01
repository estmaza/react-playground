import React, { Component } from 'react';
import MenuComponent from './Menu';
import Books from './Book'

class App extends Component {
  render() {
    return (
      <div>
        <MenuComponent></MenuComponent>
        <Books></Books>
      </div>
    );
  }
}

export default App;
