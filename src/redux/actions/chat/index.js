import api from '../../../utils/api'
import { store } from '../../../utils/store';
import history from "../../../utils/history";
import {
  FETCH_CHATROOMS,
  SET_CHATROOM,
  NEW_MESSAGE,
  FETCH_MESSAGES,
  CLOSE_CHAT,
  CREATE_CHATROOM
} from '../../types'





/* ----   FETCH_CHATROOMS ACTION CREATOR    ---- */
export const fetchChatrooms = () => async (dispatch, getState) => {
  try {
    const response = await api.get('/chatrooms/fetch');
    const chatrooms = response.data.chatrooms.map(chatroom => {
      const messages = getState().chatrooms.length !== 0 ? getState().chatrooms[chatroom._id].messages : [];
      return { ...chatroom, messages: [...messages] }
    })

    dispatch({
      type: FETCH_CHATROOMS,
      payload: {...chatrooms}
    })
  } catch(e) {
    console.log(e)
  }
}
/* ----   ****    ---- */

/* ----   ADD_CHATROOM ACTION CREATOR    ---- */
export const createChatroom = (name, userId) => async dispatch => {
  try {
    const { data } = await api.post(
      '/chatrooms/create',
      { name, createdBy: userId }
    )
    dispatch({
      type: CREATE_CHATROOM,
      payload: {...data.chatroom, messages: []}
    })
    history.push(`/chats/${data.chatroom._id}`)
  } catch (e) {
    dispatch({
      type: 'ERROR',
      error: 'Invalid Name'
    })
  }
}
/* ----   ****    ---- */

/* ----   FETCH_MESSAGES ACTION CREATOR    ---- */
export const fetchMessages = (chatroomId) => async dispatch => {
  const { data } = await api.get(`/messages/fetch?chatroomId=${chatroomId}`);
  dispatch({ type: FETCH_MESSAGES, payload: {chatroomId, messages: data.messages }})
}
/* ----   ****    ---- */
