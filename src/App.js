import "./App.scss";
import React from "react";
import Header from "./components/Header/Header.js";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div>
        Test Link
        <div>
          <button>
            <Link to="/users">go to user page</Link>
          </button>
          <button>
            <Link to="/admins">go to admin page</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
