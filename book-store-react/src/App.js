import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import MenuComponent from './Menu';
import Books from './components/Book'

class App extends Component {
  render() {
    return (
      <div>
        <MenuComponent></MenuComponent>

        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button primary>Click Here</Button>
        <Button animated='vertical'>
          <Button.Content hidden>Shop</Button.Content>
          <Button.Content visible>
            <Icon name='shop' />
          </Button.Content>
        </Button>
        <div class="ui divider"></div>
        <Books></Books>
      </div>
    );
  }
}

export default App;
