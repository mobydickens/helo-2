let initialState = {
  username: '',
  id: ''
}

const NEW_USER = 'NEW_USER';
const CURRENT_USER = 'CURRENT_USER';

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

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case NEW_USER:
      return { ...state, username: action.payload.username, id: action.payload.id };
    case CURRENT_USER: 
      return { ...state, username: action.payload.username, id: action.payload.id }
    default: 
      return state;
  }
}