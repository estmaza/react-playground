import React, { Component } from 'react'
import http from '../core/http'

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentDidMount() {
    http.Books.all()
      .then((result) => {
        this.setState({
          isLoaded: true,
          items: result
        })
      },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        });
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Books;