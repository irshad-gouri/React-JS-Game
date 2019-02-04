import React, { Component } from 'react';

class Box extends React.Component {
  render() {
    return (
      <button
        className="box"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Box;