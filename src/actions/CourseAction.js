import * as ActionType from "./ActionType";
import CourseApi from "../api/CourseApi";

export function getCoursesAction() {
  return dispatch => {
    dispatch(getCourses);

    return CourseApi.getAllCourses()
      .then(courses => {
        dispatch(getCoursesSuccess(courses));
      })
      .catch(error => {
        dispatch(getCoursesFailure(error));
        throw error;
      });
  };
}

export function deleteCourseAction(courseId) {
  return dispatch => {
    dispatch(deleteCourse);

    return CourseApi.deleteCourse(courseId)
      .then(() => {
        dispatch(deleteCourseSuccess(courseId));
      })
      .catch(error => {
        dispatch(deleteCourseFailure(error));
        throw error;
      });
  };
}

export function updateCourseAction(course) {
  return dispatch => {
    dispatch(updateCourse);

    return CourseApi.saveCourse(course)
      .then(course => {
        dispatch(updateCourseSuccess(course));
      })
      .catch(error => {
        dispatch(updateCourseFailure(error));
        throw error;
      });
  };
}

export function createCourseAction(course) {
  return dispatch => {
    dispatch(createCourse);

    return CourseApi.saveCourse(course)
      .then(course => {
        dispatch(createCourseSuccess(course));
      })
      .catch(error => {
        dispatch(createCourseFailure(error));
        throw error;
      });
  };
}

export function getCourseAction(courseId) {
  return dispatch => {
    dispatch(getCourse(courseId));
  };
}

export function resetCourseAction() {
  return dispatch => {
    dispatch(resetCourse);
  }
}

export const getCourses = {
  type: ActionType.GET_COURSES
};

export const getCoursesSuccess = courses => ({
  type: ActionType.GET_COURSES_SUCCESS,
  courses
});

export const getCoursesFailure = error => ({
  type: ActionType.GET_COURSES_FAILURE,
  error
});

export const getCourse = courseId => ({
  type: ActionType.GET_COURSE,
  courseId
});

export const resetCourse = {
  type: ActionType.RESET_COURSE
};

export const createCourse = {
  type: ActionType.CREATE_COURSE
};

export const createCourseSuccess = course => ({
  type: ActionType.CREATE_COURSE_SUCCESS,
  course
});

export const createCourseFailure = error => ({
  type: ActionType.CREATE_COURSE_FAILURE,
  error
});

export const deleteCourse = {
  type: ActionType.DELETE_COURSE
};

export const deleteCourseSuccess = courseId => ({
  type: ActionType.DELETE_COURSE_SUCCESS,
  courseId
});

export const deleteCourseFailure = error => ({
  type: ActionType.DELETE_COURSE_FAILURE,
  error
});

export const updateCourse = {
  type: ActionType.UPDATE_COURSE
};

export const updateCourseSuccess = course => ({
  type: ActionType.UPDATE_COURSE_SUCCESS,
  course
});

export const updateCourseFailure = error => ({
  type: ActionType.UPDATE_COURSE_FAILURE,
  error
});
