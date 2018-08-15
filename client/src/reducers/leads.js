const leads = ( state = [], action) => {
  switch (action.type) {
    case 'GET_LEADS':
     return action.leads;
    case 'ADD_LEAD':
      return [action.lead, ...state]
    default:
      return state;
  }
}

export default leads;
