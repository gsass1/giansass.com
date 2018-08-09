import React, { Component } from 'react';

class NavLink extends Component {
  state = {
    active: false,
    scrollRef: null,
  };

  constructor(props) {
    super(props);
    this.props = props;
    this.state.scrollRef = props.scrollRef;
  }

  setActive(active) {
    this.setState({active: active});
  }

  render() {
    return (
      <li onClick={() => this.props.onClick(this)} className={'nav__item uppercase' + (this.state.active ? ' nav__item--active':'')}>
        {this.props.title}
      </li>
    );
  }
}

export default NavLink;
