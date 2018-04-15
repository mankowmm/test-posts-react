import React, { Component } from 'react';
import PostListElement from './PostListElement';
import Loader from '../loader/Loader';
import './PostList.css';

class PostList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      posts: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      return response.json();
    })
    .then((postsJson) => {
      this.setState({
        loading: false,
        posts: postsJson
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <Loader loading={this.state.loading}/>
    } else {
      var postListArray = this.state.posts.map((post, index) => {
          return <PostListElement key={index} post={post}/>;
      });
      return  (<div className="PostList">{ postListArray }</div>)
    }
    
  }
}

export default PostList;
