import React, { Component } from 'react'

export default class Comment extends Component {
  render() {
    return (
      <li>{this.props.author}—{this.props.body}</li>
    );
  }
}