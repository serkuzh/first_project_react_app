import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";

import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Sett from "./components/Settng/Sett";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar sidebar={props.state.sidebar} />
      <div className="app-wrapper-content">
        <Route
          exact
          path="/dialogs"
          render={() => <Dialogs messagesPage={props.state.messagesPage} />}
        />
        <Route
          path="/profile"
          render={() => <Profile posts={props.state.profilePage} />}
        />
        <Route path="/newspaper" component={News} />
        <Route path="/listen" component={Music} />
        <Route path="/sett" component={Sett} />
      </div>
    </div>
  );
};

export default App;
