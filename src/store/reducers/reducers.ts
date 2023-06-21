import {combineReducers} from "redux";
import {scheduleReducer} from "./scheduleReducer";

export const rootReducer = combineReducers({
  cronLines: scheduleReducer
})