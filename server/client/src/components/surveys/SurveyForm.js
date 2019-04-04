//SurveyForm shows a form for a user to add input
import _ from "lodash";
import React from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";

//iterate over array of fields. for every object inside array, run lodash _.map fx. pull off label and name from each 'field' object.
//create a new reduxForm field then return it. new array is passed into renderFields() which is passed to render().
const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Subject Line", name: "subject" },
  { label: "Email Body", name: "body" },
  { label: "Recipient List", name: "emails" }
];

class SurveyForm extends React.Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return <Field key={name} component={SurveyField} type='text' label={label} name={name} />;
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to='/surveys' className='btn grey darken-1'>
            <i class='material-icons right'>cancel</i>
            Cancel
          </Link>
          <button type='submit' className='btn right red accent-3'>
            <i class='material-icons right'>arrow_forward</i>
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
  _.each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = "Required";
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm"
})(SurveyForm);
