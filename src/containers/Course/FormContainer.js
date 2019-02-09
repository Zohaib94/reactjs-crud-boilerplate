import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import toastr from "toastr";
import * as courseAction from "../../actions/CourseAction";
import CourseForm from "../../components/Course/Form"; // eslint-disable-line import/no-named-as-default

export class FormContainer extends React.Component {
  handleSave = values => {
    const course = {
      id: values.id,
      title: values.title,
      watchHref: values.watchHref,
      authorId: values.authorId,
      length: values.length,
      category: values.category
    };

    if (course.id) {
      this.props.action
        .updateCourseAction(course)
        .then(() => {
          toastr.success("Course has been updated successfully!");
          this.props.history.push("/courses");
        })
        .catch(error => {
          toastr.error(error);
        });
    } else {
      this.props.action
        .createCourseAction(course)
        .then(() => {
          toastr.success("Course has been created successfully!");
          this.props.history.push("/courses");
        })
        .catch(error => {
          toastr.error(error);
        });
    }
  };

  handleCancel = event => {
    event.preventDefault();
    this.props.action.resetCourseAction();
    this.props.history.replace("/courses");
  };

  render() {
    const { initialValues } = this.props;
    const heading = initialValues && initialValues.id ? "Edit" : "Add";

    return (
      <div className="container">
        <CourseForm
          heading={heading}
          handleSave={this.handleSave}
          handleCancel={this.handleCancel}
          initialValues={this.props.initialValues}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  courses: state.coursesReducer.courses,
  initialValues: state.coursesReducer.course
});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(courseAction, dispatch)
});

FormContainer.propTypes = {
  action: PropTypes.object.isRequired,
  history: PropTypes.object,
  authors: PropTypes.array,
  initialValues: PropTypes.object,
  match: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
