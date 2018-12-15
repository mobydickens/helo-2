import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className='mt-8 mx-32 p-8 bg-white shadow flex'>
        <input 
          placeholder='search' 
          type="text"
          className='bg-white appearance-none border-2 border-grey-lighter w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-grey-light'/>
          <i 
            // onClick={ () => this.search() }
            className="fas fa-search bg-orange text-white text-lg p-4 cursor-pointer hover:bg-orange-lighter">
          </i>
          <button className='bg-grey-darkest hover:bg-grey-light hover:border-grey-light text-white font-semibold py-2 px-4 border border-grey-darkest shadow'>Reset</button>
          <div className='w-3/5 flex justify-end items-center'>
            <label>Show my posts</label>
            <input className='m-2' type="checkbox"/>
          </div>
      </div>
    );
  }
}

export default Search;