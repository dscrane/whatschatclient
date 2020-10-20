import _ from 'lodash'
import {
  CREATE_CHATROOM,
  FETCH_CHATROOMS,
  SEND_MESSAGE,
  FETCH_MESSAGES,
  CLOSE_CHAT,
} from '../types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_CHATROOMS:
      return {
        ...state,
        ..._.mapKeys(action.payload, '_id')
      }
    default:
      return state
  }
}
