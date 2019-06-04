//iterate over array of fields. for every object inside array, run lodash _.map fx. pull off label and name from each 'field' object.
//create a new reduxForm field then return it. new array is passed into renderFields() which is passed to render().
export default [
  { label: "Survey Title", name: "title" },
  { label: "Subject Line", name: "subject" },
  { label: "Email Body", name: "body" },
  { label: "Recipient List", name: "recipients" }
];
