import React, { Component } from 'react';
import Header from './Header.jsx';

class NewPost extends Component {
  render() {
    return (
      <div className='w-full h-screen flex'>
        <Header />
        <div className='w-screen bg-grey flex justify-center'>
          <div className='shadow border border-solid border-gray w-1/2 p-8 bg-white self-center'>
            <h1 className='text-orange mb-4'>New Post</h1>
            <label htmlFor="title">Title:</label><br/>
            <input className='border border-solid border-gray w-64' type="text"/><br/>
            <label>Post:</label><br></br>
            <textarea className='border border-solid border-gray w-full h-32'></textarea><br/>
            <div className='w-full flex justify-end'>
              <button className='bg-grey-darkest hover:bg-grey-light hover:border-grey-light text-white font-semibold py-2 px-4 border border-grey-darkest shadow'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPost;