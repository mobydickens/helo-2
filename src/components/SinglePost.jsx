import React, { Component } from 'react';
import Header from './Header.jsx';
import { connect } from 'react-redux';
import moment from 'moment';

class SinglePost extends Component {

  render() {
    let date = moment(this.props.created_at);
    return (
      <div className='w-full h-screen flex'>
        <Header />
        <div className='w-screen bg-grey flex justify-center'>
          <div className='shadow border border-solid border-gray mt-32 w-3/4 h-64 p-8 bg-white'>
            <div className='flex justify-between'>
              <h2>{ this.props.title }</h2>
              <div>Posted by {this.props.username} on {date.format('MMM Do')}</div>
            </div>
            <div>
              <p className='p-6'>{this.props.post}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  return {
    username: state.singlePost.username,
    created_at: state.singlePost.created_at,
    title: state.singlePost.title,
    post: state.singlePost.post,
  }
}
export default connect(mapState)(SinglePost);