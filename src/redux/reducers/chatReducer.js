import _ from "lodash";
import {
  CREATE_CHATROOM,
  FETCH_CHATROOMS,
  RECEIVE_MESSAGE,
  FETCH_MESSAGES,
  CLOSE_CHAT,
  LOG_OUT,
} from "../types";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CHATROOMS:
      return {
        ...state,
        ..._.mapKeys(action.payload, "_id"),
      };
    case CREATE_CHATROOM:
      return {
        ...state,
        [action.payload._id]: {
          ...action.payload,
        },
      };
    case FETCH_MESSAGES:
      return {
        ...state,
        [action.payload.chatroomId]: {
          ...state[action.payload.chatroomId],
          messages: [
            ...state[action.payload.chatroomId].messages,
            ...action.payload.messages,
          ],
        },
      };
    case RECEIVE_MESSAGE:
      return {
        ...state,
        [action.payload.chatroomId]: {
          ...state[action.payload.chatroomId],
          messages: [
            ...state[action.payload.chatroomId].messages,
            action.payload.message
          ]
        }
      }
    case LOG_OUT:
      return [...INITIAL_STATE];
    default:
      return state;
  }
};
