import React, { Component } from 'react';
import moment from 'moment';

class Posts extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: []
  //   }
  // }
  
  render() {
    let post = this.props.posts.map((post, i) => {
      let date = moment(post.created_at);
      return (
        <div key={i}>
          <h4>{post.title}</h4>
          <p>Posted by: {post.username} on {date.format('MMM Do')}</p>
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