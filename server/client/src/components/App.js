import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={Landing} />
            <Route path='/dashboard' exact component={Dashboard} />
            <Route path='/surveys/new' exact component={SurveyNew} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
