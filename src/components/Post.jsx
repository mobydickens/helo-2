import React, { Component } from 'react';

class Posts extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: []
  //   }
  // }
  
  render() {
    console.log('posts props: ', this.props.posts)
    let post = this.props.posts.map((post, i) => {
      return (
        <div key={i}>
          <h4>{post.title}</h4>
          <p>Posted by: {post.username} on {post.created_at}</p>
          <p>{post.post}</p>
        </div>
      )
    })
    return (
      <div>
        {post}
      </div>
    );
  }
}

export default Posts;