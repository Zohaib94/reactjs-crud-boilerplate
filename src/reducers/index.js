import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import coursesReducer from "./CoursesReducer";

export default combineReducers({
  coursesReducer,
  form: formReducer
});
