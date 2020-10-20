import {
  CHECK_AUTH,
  LOG_IN,
  LOG_OUT,
  UPDATE_USER
} from '../types'

// Do not modify
const INITIAL_STATE = {
  isLoggedIn: false,
  _id: null,
  token: null,
  data: {}
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {

    default:
      return state;
  }
}
