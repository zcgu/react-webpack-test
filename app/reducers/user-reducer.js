const initialUserState = {
  users: [],
  userNumber: 0

}

const userReducer = function(state = initialUserState, action) {
  switch(action.type) {
  case 'ADD_ONE':
    // return Object.assign({}, state, { users: action.users });
    return Object.assign({}, state, { userNumber: state.userNumber + 1 });
  }
  return state;
}

export default userReducer;