import api from '../../../utils/api';
import history from '../../../utils/history';
import {
  CHECK_AUTH,
  LOG_IN,
  LOG_OUT,
  SET_CHATROOM,
  UPDATE_USER
} from '../../types';


/* ----   CHECK_AUTH ACTION CREATOR    ---- */
export const checkAuth = () => async dispatch => {
  const token = localStorage.getItem('jwt-token');
  if (!token) {
    return dispatch({
      type: CHECK_AUTH,
      payload: {
        isLoggedIn: false,
        token: null
      }
    })
  }

  const response = await api.get(
    '/users/fetch',
    {headers: {
      'Authorization': `Bearer ${token}`
      }
    }
  )

  dispatch({
    type: CHECK_AUTH,
    payload: {
      token,
      _id: response.data._id,
      isLoggedIn: true,
      user: response.data.user
    }
  })
}
/* ----   ****    ---- */

/* ----   LOG_IN ACTION CREATOR    ---- */
export const userLogin = formValues => async dispatch => {
  const response = await api.post(
    '/users/login',
    { ...formValues }
  )

  localStorage.setItem('jwt-token', response.data.token)

  dispatch({
    type: LOG_IN,
    payload: {
      _id: response.data.user._id,
      token: response.data.token,
      user: response.data.user,
      isLoggedIn: true,
    }
  })

  history.push('/chats')
}
/* ----   ****    ---- */

/* ----   LOG_OUT ACTION CREATOR    ---- */
export const userLogout = () => async (dispatch, getState) => {
  const { token } = getState().auth

  await api.post(
    '/users/logout',
    {},
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  )
  await localStorage.removeItem('jwt-token');

  dispatch({
    type: LOG_OUT,
  })

  history.push('/')
}
/* ----   ****    ---- */

/* ----   SET_CHATROOM ACTION CREATOR    ---- */
export const setChatroom = (currentChatroom) => async dispatch => {
  dispatch({
    type: SET_CHATROOM,
    payload: { currentChatroom }
  })
}
/* ----   ****    ---- */
