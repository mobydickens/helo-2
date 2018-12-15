import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { currentUser } from '../ducks/reducer';

class Home extends Component {

  async componentDidMount() {
    let res = await axios.get('/api/user');
    this.props.currentUser({ username: res.data.username, id: res.data.id });
  }

  render() {
    return (
      <div className='w-full h-screen flex'>
        <div className='w-24 bg-gradient-2 flex flex-col justify-between'>
          <div className='flex flex-col'>
            { this.props.photo 
                ? <img src={this.props.photo}/> 
                : <img
                  className='mt-4 ml-3 rounded-full h-16 w-16 flex items-center justify-center'
                  src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png' alt="user"/> }
            <div className='text-white text-2xl ml-6 mt-3'>{ this.props.username }</div>
            <i className="fas fa-home text-4xl text-white ml-6 mt-6 cursor-pointer hover:text-pink-lightest"></i>
            <i className="fas fa-file-alt text-4xl text-white ml-8 mt-8 cursor-pointer hover:text-pink-lightest"></i>
          </div>
          <div>
            <i className="fas fa-sign-out-alt text-white text-4xl ml-8 mb-8 cursor-pointer hover:text-pink-lightest"></i>
          </div>
        </div>
        <div className='w-full bg-grey'></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.username,
    photo: state.photo
  }
}
export default connect(mapStateToProps, { currentUser })(Home);