import React, { Component } from 'react';

class Project extends Component {
  render() {
    return (
      <a href={this.props.url}>
        <div className='project'>
          <img className='project__image' alt={this.props.name} src={this.props.image} />
          <div className='project__info'>
            <div className='project__description uppercase'>
              {this.props.description}
            </div>
          </div>
        </div>
      </a>
    );
  }
}

export default Project;
