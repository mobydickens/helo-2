import React, { Component } from 'react';
import Header from './Header.jsx';
import { connect } from 'react-redux';

class SinglePost extends Component {

  render() {
    console.log(this.props)
    return (
      <div className='w-full h-screen flex'>
        <Header />
        <div className='w-screen bg-grey flex justify-center'>
          <div className='shadow border border-solid border-gray mt-32 w-3/4 h-64 p-8 bg-white'>
            <h2>{ this.props.title }</h2>
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
    post: state.singlePost.post
  }
}
export default connect(mapState)(SinglePost);