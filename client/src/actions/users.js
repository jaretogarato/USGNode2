import axios from 'axios';
import { setFlash } from './flash';

export const addUser = (user, history) => {
  return(dispatch) => {
    axios.post('/api/users', { user })
      .then( res => {
        dispatch({ type: 'ADD_USER', users: res.data })
        history.push(`./users/${res.data.id}`)
      })
      .catch( err => {
        dispatch(setFlash('Failed To Add Users', 'red'));
      });
  }
}

export const getUsers = () => {
  return(dispatch) => {
    axios.get('/api/users')
      .then( res => {
        dispatch({  type: 'GET_USERS', users: res.data })
      })
      .catch( err => {
        dispatch(setFlash('Failed To Retrieve Users', 'red'));
      });
  }
}
