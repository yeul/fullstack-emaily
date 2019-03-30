import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import * as actions from "../actions";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className='container'>
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
  }
}

export default connect(
  null,
  actions
)(App);
