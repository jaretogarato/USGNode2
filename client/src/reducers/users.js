const users = ( state = [], action) => {
  switch (action.type) {
    case 'GET_USERS':
     return action.leads;
    case 'ADD_USERS':
      return [action.user, ...state]
    default:
      return state;
  }
}

export default users;
