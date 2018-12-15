import React, { Component } from 'react';
import moment from 'moment';

class Posts extends Component {
  
  render() {
    let post = this.props.posts.map((post, i) => {
      let date = moment(post.created_at);
      return (
        <div className='flex justify-between m-4 p-6 shadow border border-solid border-gray' key={i}>
          <h3>{post.title}</h3>
          <p>Posted by {post.username} on {date.format('MMM Do')}</p>
        </div>
      )
    })
    return (
      <div className='mx-32 my-20 p-8 bg-white shadow'>
        {post}
      </div>
    );
  }
}

export default Posts;