import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { getPost } from '../ducks/reducer';

class Posts extends Component {
  
  async singlePost(id) {
    let res = await axios.get(`/api/singlepost/${id}`);
    this.props.getPost(res.data[0]);
    this.props.history.push('/post');
  }

  render() {
    let post = this.props.posts.map((post, i) => {
      let date = moment(post.created_at);
      return (
        <div className='flex justify-between m-4 p-6 shadow border border-solid border-gray' key={i}>
          <div
            onClick={ () => this.singlePost(post.id) }
            className='no-underline' 
            to='/post'>
            <h3 className='cursor-pointer text-black hover:text-orange'>{post.title}</h3>
          </div>
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

export default withRouter(connect(null, { getPost })(Posts));