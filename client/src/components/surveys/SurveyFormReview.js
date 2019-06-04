//Shows users their form inputs for review.
import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries.</h5>
      {reviewFields}
      <button className='red accent-3 btn left' onClick={onCancel}>
        <i className='material-icons left'>arrow_back</i>
        Back
      </button>
      <button onClick={() => submitSurvey(formValues, history)} className='green accent-3 btn right'>
        <i className='material-icons right'>send</i>
        Send Survey
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
