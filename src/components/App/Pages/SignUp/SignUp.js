import React, { Component } from "react";
import fire from "../../../firebase";

import "./SignUp.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: "",
      eMessage: "",
    };
  }
  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        this.props.history.push('/')
      })
      .catch((error) => {
        const eMessage = error.message;
        this.setState({ eMessage });
        console.log(error);
      });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  state = {};
  render() {
    return (
      <div className="signup-page">
        <h1>Create an Account:</h1>
        <form onSubmit={this.signup}>
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              class="form-control"
              id="email"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              class="form-control"
              id="password"
              name="password"
              required
            />
          </div>
          <div className="form-group>">
            <label>Skill #1:</label>
            <select className="skills-list">
              <option>Machine Learning</option>
              <option>Frontend Web Dev</option>
              <option>Backend Web Dev</option>
              <option>UI / UX</option>
            </select>
            <label>Skill #2:</label>
            <select className="skills-list">
              <option>None</option>
              <option>Machine Learning</option>
              <option>Frontend Web Dev</option>
              <option>Backend Web Dev</option>
              <option>UI / UX</option>
            </select>
            <br />
            <label>Skill #3:</label>
            <select className="skills-list">
              <option>None</option>
              <option>Machine Learning</option>
              <option>Frontend Web Dev</option>
              <option>Backend Web Dev</option>
              <option>UI / UX</option>
            </select>
            <label>Skill #4:</label>
            <select className="skills-list">
              <option>None</option>
              <option>Machine Learning</option>
              <option>Frontend Web Dev</option>
              <option>Backend Web Dev</option>
              <option>UI / UX</option>
            </select>
          </div>
          <br />
          <button className="create-acc-btn" type="submit" value="submit">
            Create Account
          </button>
          <p>{this.state.eMessage}</p>
        </form>
      </div>
    );
  }
}

export default SignUp;
