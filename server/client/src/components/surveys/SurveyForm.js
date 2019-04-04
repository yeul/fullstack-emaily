//SurveyForm shows a form for a user to add input
import _ from "lodash";
import React from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends React.Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return <Field key={name} component={SurveyField} type='text' label={label} name={name} />;
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to='/surveys' className='btn grey darken-1'>
            <i className='material-icons right'>cancel</i>
            Cancel
          </Link>
          <button type='submit' className='btn right red accent-3'>
            <i className='material-icons right'>arrow_forward</i>
            Next
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || "");

  //square brackets on values[] says we are going to reference a proprty on an object on the fly. the key itself not the whole name key-value pair {name: whatever}
  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "Required";
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
