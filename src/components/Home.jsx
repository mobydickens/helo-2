import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { currentUser } from '../ducks/reducer';
import Post from './Post.jsx';
import Search from './Search.jsx';
import Header from './Header.jsx';

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
    this.setState({
      posts: posts.data
    })
  }

  render() {
    return (
      <div className='w-full h-screen flex'>
        <Header />
        <div className='w-screen bg-grey flex flex-col'>
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