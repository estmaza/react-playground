import React, { Component } from 'react';
import MenuComponent from './Menu';
import Books from './books/books'

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
