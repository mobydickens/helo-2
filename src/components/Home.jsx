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
        <div className='w-24 bg-gradient-2 flex flex-col'>
          <img 
            src={ this.props.photo !== null 
              ? this.props.photo 
              : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'} alt="user"/>
          <div>{ this.props.username }</div>
          <div>Home</div>
          <div>Posts</div>
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