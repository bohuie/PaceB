import React from "react";
import history from "../../History";

import "./Home.css";
import NavBar from "../../../NavBar/NavBar";

class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log("App - Constructor");
  }

  render() {
    console.log("App - Rendered");

    return (
      <div className="Home">
        <NavBar />
        <div id="Welcome">
          <h1>Welcome to Capstone Pace B</h1>
        </div>
        <div id="sys-description">
          <h3>System Description:</h3>
          <p>Pace B aims to link mentors and mentees together!</p>
        </div>
        <form className="home-btns">
          <button
            className="home-btn"
            onClick={() => history.push("/admin")}
          >
            Admin Page
          </button>
          <button className="home-btn" onClick={() => history.push("/mentor")}>
            Mentor Page
          </button>
        </form>
      </div>
    );
  }
}

//when you call the app component it will use this this as the default app code
export default Home;
