import React, { useEffect } from "react";
import { Redirect, Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import history from "./utils/history";
import Sidebar from "./components/sidebar/Sidebar";
import Landing from "./pages/Landing";
import Chatroom from "./pages/Chatroom";
import { checkAuth } from "./redux/actions/auth";
import { fetchChatrooms } from "./redux/actions/chat";
import "./styles/bootstrap.min.css";
import "./styles/styles.css";

const App = ({ auth, checkAuth, fetchChatrooms }) => {
  useEffect(() => {
    checkAuth();
    if (auth.isLoggedIn) {
      fetchChatrooms();
    }
  }, [auth.isLoggedIn, checkAuth, fetchChatrooms]);
  return (
    <div className="wrapper d-flex align-items-stretch">
      <Router history={history}>
        <>
          <Sidebar auth={auth.isLoggedIn} />
          <Switch>
            <Route path="/" exact>
              {auth.isLoggedIn ? <Redirect to="/chats" /> : <Landing />}
            </Route>
            <Route path="/chats">
              {auth.isLoggedIn ? <Chatroom /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { checkAuth, fetchChatrooms })(App);
