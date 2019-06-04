import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/surveyList";

const Dashboard = () => {
  return (
    <div>
      <SurveyList />
      <div class='fixed-action-btn'>
        <Link to='/surveys/new' class='btn-floating btn-large red accent-3'>
          <i class='large material-icons'>add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
