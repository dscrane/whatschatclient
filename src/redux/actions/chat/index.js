import api from '../../../utils/api'
import { store } from '../../../utils/store';
import history from "../../../utils/history";
import {
  FETCH_CHATROOMS,
  NEW_MESSAGE,
  LOAD_MESSAGES,
  CLOSE_CHAT,
  ADD_CHATROOM
} from '../../types'



/* ----   FETCH_CHATROOMS ACTION CREATOR    ---- */
export const fetchChatrooms = () => async (dispatch, getState) => {
  try {
    const response = await api.get('/chatrooms/fetch');
    console.log(response)

    const chatrooms = response.data.chats.map(chat => {
      const messages = getState().chatrooms.length !== 0 ? getState().chatrooms[chat._id].messages : [];
      return { ...chat, messages: [...messages] }
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
