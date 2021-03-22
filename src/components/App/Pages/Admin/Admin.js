import React from "react";
import fire from "../../../firebase";

import Login from "../login.jsx";
import AdminHome from "./Dashboard/AdminHome";

import "./Admin.css";
import NavBar from "../../../NavBar/NavBar";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    console.log("App - Constructor");
    this.state = {
      user: null,
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    //use this for ajax calls form the server
    //set the sate here

    console.log("App - Mounted");
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  render() {
    // If user isn't logged in, they are redirected to login page, else they are redirected to admin dashboard
    const isLoggedIn = this.state.user;
    if (isLoggedIn) {
        return (
          <div className="admin-page">
            <NavBar />
            <AdminHome />
          </div>
        );
    } else {
      return (
        <div>
          <NavBar />
          <Login />
        </div>
      );
    }
  }
}

export default Admin;
