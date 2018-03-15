import React, { Component } from 'react'
import Comment from '../../components/comment'

// This is just a placeholder for a real request
const fetchSomeComments = cb =>
  cb([
    { author: "Developer", body: "You look nice today." },
    { author: "Aaron Morey", body: "I know, right?!" }
  ]);
  
export default class Comments extends Component {
  constructor() {
    super();
    this.state = { comments: [] };
  }
  componentDidMount() {
    fetchSomeComments(comments =>
      this.setState({ comments: comments }));
  }
  render() {
    return (
      <ul>
        {this.state.comments.map(c => (
          <Comment body={c.body} author={c.author} />
        ))}
      </ul>
    );
  }
}