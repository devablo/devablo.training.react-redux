import { combineReducers } from "redux";
import commentsReducer from "./commentsReducer";

const rootReducer = combineReducers({
    commentsReducer: commentsReducer
  })
  
export default rootReducer;