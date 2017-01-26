import React, { Component } from 'react';
import Comment from './Comment.js'
import './App.css';


class Post extends Component {
  constructor (props) {
    super()
    this.state = {
      body: props.body
    }
  }
  handleClick (e) {
    let newBody = prompt("What should the new body be?")
    this.setState({
      body: newBody
    })
  }
  render() {
    let comments = this.props.comments.map( (comment, index) => (
      // each comment needs a key attribute to keep track of data passed as props
      // key should be a unique identifier for each child component
      <Comment body={comment} key={index} />
    ))
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>By {this.props.author}</p>
        <div>
          <p>{this.state.body}</p>
          <button onClick={(e) => this.handleClick(e)}>Edit Body</button>
        </div>
        <h3>Comments:</h3>
        {comments}
      </div>
    );
  }
}

export default Post;
