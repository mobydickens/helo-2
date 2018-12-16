let initialState = {
  username: '',
  id: '',
  singlePost: {}
}

const NEW_USER = 'NEW_USER';
const CURRENT_USER = 'CURRENT_USER';
const GET_POST = 'GET_POST';

export function newUser({id, username}) {
  return {
    type: NEW_USER,
    payload: {
      id,
      username
    }
  }
}

export function currentUser({username, id}) {
  return {
    type: CURRENT_USER,
    payload: {
      id,
      username
    }
  }
}

export function getPost(post) {
  return {
    type: GET_POST,
    payload: post
  }
}

export default function reducer(state=initialState, action) {
  if (action === undefined) {
    console.log('Action is undefined (gasp)');
  }
  switch(action.type) {
    case NEW_USER:
      return { ...state, username: action.payload.username, id: action.payload.id };
    case CURRENT_USER: 
      return { ...state, username: action.payload.username, id: action.payload.id };
    case GET_POST:
      return { ...state, singlePost: action.payload };
    default: 
      return state;
  }
}