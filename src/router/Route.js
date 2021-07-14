import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import dashboard from "../components/Dashboard/dashboard";
import Mcqs from "../components/Mcqs/mcqs";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

const Routes = ( ) => {
  return (
    <Router >
      <Header />
      <Switch>
        <Route path="/dashboard" exact component={dashboard} />
        <Route path="/quiz" component={Mcqs} />
        <Route path="*">
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
};

export default Routes;
