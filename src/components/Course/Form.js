import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import FieldInput from "../Common/FieldInput";

export const CourseForm = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
  heading,
  handleSave,
  handleCancel
}) => {
  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <h1>{heading}</h1>

      <Field
        type="text"
        name="title"
        label="Title"
        placeholder="Title of the course"
        component={FieldInput}
      />

      <Field
        type="text"
        name="category"
        label="Category"
        placeholder="Category of the course"
        component={FieldInput}
      />

      <Field
        type="text"
        name="length"
        label="Length"
        placeholder="Lenght of course in minutes or hours"
        component={FieldInput}
      />

      <div>
        <button type="submit" disabled={submitting} className="btn btn-primary">
          <i className="fa fa-paper-plane-o" aria-hidden="true" /> Submit
        </button>

        <button
          type="button"
          className="btn btn-default btn-space"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = "Required";
  }

  if (!values.category) {
    errors.category = "Required";
  }

  if (!values.length) {
    errors.length = "Required";
  }

  return errors;
};

CourseForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
};

export default reduxForm({
  form: "CourseForm",
  validate
})(CourseForm);
