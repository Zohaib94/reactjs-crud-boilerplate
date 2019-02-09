import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import toastr from "toastr";
import * as courseAction from "../../actions/CourseAction";
import CourseIndex from "../../components/Course/Index";

export class IndexContainer extends React.Component {
  componentDidMount() {
    this.props.action.getCoursesAction().catch(error => {
      toastr.error(error);
    });
  }

  handleAddCourse = () => {
    this.props.action.resetCourseAction();
    this.props.history.push("/course/new");
  };

  handleEditCourse = courseId => {
    if (courseId) {
      this.props.action.getCourseAction(courseId);
      this.props.history.push(`/course/${courseId}`);
    }
  };

  handleDeleteCourse = courseId => {
    if (courseId) {
      this.props.action
        .deleteCourseAction(courseId)
        .then(() => {
          toastr.success("Course has been deleted successfully!");
        })
        .catch(error => {
          toastr.error(error);
        });
    }
  };

  render() {
    const { courses } = this.props;

    if (!courses) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col">
            <h1>Courses</h1>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleAddCourse}
              >
                <i className="fa fa-plus" aria-hidden="true" /> New
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <CourseIndex
              courses={courses}
              handleDeleteButton={this.handleDeleteCourse}
              handleEditButton={this.handleEditCourse}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  courses: state.coursesReducer.courses
});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(courseAction, dispatch)
});

IndexContainer.propTypes = {
  courses: PropTypes.array,
  action: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexContainer);
