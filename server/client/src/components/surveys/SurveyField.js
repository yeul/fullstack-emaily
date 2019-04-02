//SurveyField contains logic to render a single label and text input
import React from "react";

//destructuring props from reduxForm inside of SurveyForm component.
export default ({ input, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};
