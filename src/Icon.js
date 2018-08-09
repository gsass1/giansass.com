import React, { Component } from 'react';

class Icon extends Component {
  render() {
    return (
      <li className='iconlist__item'>
        <a className='icon__link' href={this.props.url} target='_blank'>
            <i className={'icon fa ' + this.props.iconClass}></i>
        </a>
      </li>
    );
  }
}

export default Icon;
