import React from "react";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Message</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img
            src="https://www.logodesign.net/images/illustration-logo.png"
            alt=""
          />
        </div>

        <div>ava + discription</div>
        <div>
          my posts
          <div>new post</div>
        </div>
        <div>post 1</div>
        <div>post 2</div>
      </div>
    </div>
  );
};

export default App;
