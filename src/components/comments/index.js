import React, { Component } from 'react';
import Comment from '../comment';
import {connect} from 'react-redux';
import { fetchComments } from '../../actions/commentActions';

class Comments extends Component {

  componentWillMount() {
    this.props.fetchComments();
  }

  render() {
    return (
      <ul>
      { this.props.comments.map(c => (
        <Comment body={c.body} author={c.author} />
      ))
      }
    </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.commentsReducer
  }
}

export default connect(mapStateToProps, { fetchComments })(Comments);