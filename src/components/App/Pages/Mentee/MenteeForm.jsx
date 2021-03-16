import React, { useState } from "react";
import axios from "axios";

import "./MenteeForm.css";

import { Select, message } from 'antd';

const { Option } = Select;

function handleChangeSkills(value) {
  console.log(`selected ${value}`);
}

function MenteeForm() {
  const [inputs, setInputs] = useState({
    email: "",
    first_name: "",
    last_name: "",
    skill1: "None",
    skill2: "None",
    skill3: "None",
    skill4: "None",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //destructure from inputs
    const {
      email,
      first_name,
      last_name,
      skill1,
      skill2,
      skill3,
      skill4,
    } = inputs;
    axios.post("/findMatch", {
      //make an object to be handled from req.body on the backend.
      email,
      first_name,
      last_name,
      skill1,
      skill2,
      skill3,
      skill4,
    });
    message.success('Form has been Submitted');
    //window.location.reload();
  };
  return (
    <div>
      {
        /* Mentee Sign Up Form: */
        <form onSubmit={handleSubmit} className="menteeform">
          <h1>Mentee Sign Up Form</h1>
          <label>First Name: </label> {/* For User First Name */}
          <input
            id="input-box"
            type="text"
            name="first_name"
            onChange={handleChange}
            required
          />
          <br />
          <label>Last Name: </label>  {/* For User Last Name */}
          <input
            id="input-box"
            type="text"
            name="last_name"
            onChange={handleChange}
            required
          />
          <br />
          <label>Email Address: </label>  {/* For User Email */}
          <input
            id="input-box"
            type="email"
            name="email"
            onChange={handleChange}
            required
          />
          <br />
          <label>Preferred Skills:</label>  {/* Multiselect input dialogue for preferred Skills */}
            <Select
              mode="multiple"
              style={{ width: '60%', marginLeft: '2rem'}}
              placeholder="select 5 skills"
              //defaultValue={['machine learning']}
              onChange={handleChangeSkills}
              optionLabelProp="label"
            >
              <Option value="machine learning" label="Machine Learning">
                <div className="demo-option-label-item">
                  Machine Learning
                </div>
              </Option>
              <Option value="front end web dev" label="Front End">
                <div className="demo-option-label-item">
                  Front End Web Development
                </div>
              </Option>
              <Option value="back end web dev" label="Back End">
                <div className="demo-option-label-item">
                  Back End Web Development
                </div>
              </Option>
              <Option value="ui ux" label="UI/UX Design">
                <div className="demo-option-label-item">
                  User Interface / User Experience Design
                </div>
              </Option>
              <Option value="android" label="Android">
                <div className="demo-option-label-item">
                  Android Development
                </div>
              </Option>
              <Option value="ios" label="iOS">
                <div className="demo-option-label-item">
                  iOS Development
                </div>
              </Option>
              <Option value="data analysis" label="Data Analysis">
                <div className="demo-option-label-item">
                  Data Analysis
                </div>
              </Option>
            </Select>
          <br/>
          <button id="mentee-btn">submit</button>
        </form>
      }
    </div>
  );
}
export default MenteeForm;
