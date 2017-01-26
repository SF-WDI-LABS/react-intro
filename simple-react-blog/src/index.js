import React from 'react';
import ReactDOM from 'react-dom';
import Post from './App';
import './index.css';

const post = {
  title: "Baby's First Post",
  author: "Baby",
  body: "Look at me I'm a posting baby.",
  comments: [
    "First!",
    "Great post",
    "Hire him"
  ]
}

ReactDOM.render(
  <Post
    title={post.title}
    author={post.author}
    body={post.body}
    comments={post.comments} />,
  document.getElementById('root')
);
