import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuComponent extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu fluid widths={2}>
        <Menu.Item name='Books' active={activeItem === 'Books'} onClick={this.handleItemClick} />
        <Menu.Item name='Authors' active={activeItem === 'Authors'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}