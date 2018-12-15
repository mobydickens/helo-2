import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { currentUser } from '../ducks/reducer';
import Post from './Post.jsx';
import Search from './Search.jsx';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    let res = await axios.get('/api/user');
    this.props.currentUser({ username: res.data.username, id: res.data.id });
    let posts = await axios.get('/api/allposts');
    console.log(posts.data);
    this.setState({
      posts: posts.data
    })
  }

  logout = () => {
    axios.get('/api/logout').then(res => {
      if(!res.data.loggedIn) {
        this.props.history.push('/');
      }
    })
  }

  render() {
    return (
      <div className='w-full h-screen flex'>
        <div className='w-32 bg-gradient-2 flex flex-col justify-between'>
          <div className='flex flex-col'>
            { this.props.photo 
                ? <img src={this.props.photo} alt="user"/> 
                : <img
                  className='mt-4 ml-3 rounded-full h-16 w-16 flex items-center justify-center ml-6'
                  src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png' alt="user"/> }
            <div className='text-white text-center text-2xl ml-4 mr-4 mt-3'>{ this.props.username }</div>
            <i className="fas fa-home text-4xl text-white text-center mt-6 cursor-pointer hover:text-pink-lightest"></i>
            <i className="fas fa-file-alt text-4xl text-white text-center mt-8 cursor-pointer hover:text-pink-lightest"></i>
          </div>
          <div>
            <i onClick={ this.logout } className="fas fa-sign-out-alt text-white text-4xl mb-8 ml-10 cursor-pointer hover:text-pink-lightest"></i>
          </div>
        </div>
        <div className='w-full bg-grey flex flex-col'>
          <Search />
          <Post posts={this.state.posts} />
        </div>
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