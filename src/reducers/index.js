import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import coursesReducer from "./CoursesReducer";
import selectedCourseReducer from "./SelectedCourseReducer";
import authorReducer from "./AuthorReducer";
import apiReducer from "./ApiReducer";

export default combineReducers({
  coursesReducer,
  selectedCourseReducer,
  authorReducer,
  apiReducer,
  form: formReducer
});
