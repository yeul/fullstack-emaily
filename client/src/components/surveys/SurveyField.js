//SurveyField contains logic to render a single label and text input
import React from "react";

//destructuring props from reduxForm inside of SurveyForm component.
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} autoComplete='off' />
      <div className='red-text' style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
