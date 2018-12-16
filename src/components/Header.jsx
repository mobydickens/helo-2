import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <div className='w-32 bg-gradient-2 flex flex-col justify-between'>
        <div className='flex flex-col'>
          { this.props.photo 
              ? <img src={this.props.photo} alt="user"/> 
              : <img
                className='mt-4 ml-3 rounded-full h-16 w-16 items-center ml-6'
                src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png' alt="user"/> }
          <div className='text-white text-center text-2xl ml-4 mr-4 mt-3'>
            { this.props.username }
          </div>
          <i className="fas fa-home text-4xl text-white text-center mt-6 cursor-pointer hover:text-pink-lightest"></i>
          <i className="fas fa-file-alt text-4xl text-white text-center mt-8 cursor-pointer hover:text-pink-lightest"></i>
        </div>
        <div>
          <i onClick={ this.logout } className="fas fa-sign-out-alt text-white text-4xl mb-8 ml-10 cursor-pointer hover:text-pink-lightest"></i>
        </div>
      </div>
    );
  }
}
function mapState(state) {
  return {
    photo: state.photo,
    username: state.username
  }
}
export default connect(mapState)(Header);