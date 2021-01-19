import React from 'react';
import Login from "../login.jsx";
import Logout from "../logout.jsx";
import fire from "../../../firebase";

import MenteeHome from "./MenteeHome";

import "./Mentee.css";

class Mentee extends React.Component {
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
        return (
            <nav className="mentee-page">
                <div>
                    <div className="Welcome">
                        <h1>MENTEE PAGE</h1>
                    </div>
                    <div className="mentee-login-form">
                        {this.state.user ? <MenteeHome></MenteeHome> : <Login></Login>}
                    </div>
                </div>
            </nav>
        );
    } 
    
}

export default Mentee;