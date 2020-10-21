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
    case CREATE_CHATROOM:
      return {
        ...state,
        [action.payload._id]: {
          ...action.payload
        }
      }
    case FETCH_MESSAGES:
      return {
        ...state,
        [action.payload.chatroomId]: {
          ...state[action.payload.chatroomId],
          messages: [
            ...state[action.payload.chatroomId].messages,
            ...action.payload.messages
          ]
        }
      }
    default:
      return state
  }
}
