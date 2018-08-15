import axios from 'axios';
import { setFlash } from './flash';

export const addLead = (lead, history) => {
  return(dispatch) => {
    axios.post('/api/leads', { lead })
      .then( res => {
        dispatch({ type: 'ADD_LEAD', leads: res.data })
        history.push(`./leads/${res.data.id}`)
      })
      .catch( err => {
        dispatch(setFlash('Failed To Add Contact', 'red'));
      });
  }
}

export const getLeads = () => {
  return(dispatch) => {
    axios.get('/api/leads')
      .then( res => {
        dispatch({  type: 'GET_LEADS', leads: res.data })
      })
      .catch( err => {
        dispatch(setFlash('Failed To Retrieve Contacts', 'red'));
      });
  }
}
