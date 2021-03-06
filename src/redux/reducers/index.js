import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import chatReducer from "./chatReducer";

export default combineReducers({
  auth: authReducer,
  chatrooms: chatReducer,
  form: formReducer,
});
