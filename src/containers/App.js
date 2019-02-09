import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from "../components/Common/PageNotFound";
import Home from "../components/Landing/Home";
import CourseIndexContainer from "./Course/IndexContainer"; // eslint-disable-line import/no-named-as-default
import CourseFormContainer from "./Course/FormContainer"; // eslint-disable-line import/no-named-as-default
import About from "../components/About";
import createBrowserHistory from "history/createBrowserHistory";
import HeaderNavContainer from "./Landing/HeaderNavContainer"; // eslint-disable-line import/no-named-as-default

const history = createBrowserHistory();

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <HeaderNavContainer />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/courses" component={CourseIndexContainer} />
            <Route exact path="/course" component={CourseFormContainer} />
            <Route path="/course/:id" component={CourseFormContainer} />
            <Route path="/about" component={About} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
