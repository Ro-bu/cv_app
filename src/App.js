import React, {Component} from "react";
import {GeneralInformation} from "./components/GeneralInformation";
import {Education} from "./components/Education";
import {WorkExperience} from "./components/WorkExperience";
import {Skills} from "./components/Skills";
import {nanoid} from "nanoid";
import { isThisTypeNode } from "typescript";

class App extends Component {
  constructor() {
    super()
    this.state = {
      generalInformation: {
        firstName: "se",
        lastName: "",
        occupation:"",
        phone: "",
        email: "",
        image: ""
      },
      education: [{school:"", subject:"", yearStarted:"", yearFinished:"", id: nanoid()}],
      workExperience: [{company:"", position:"", yearStarted:"", yearFinished:"", id: nanoid()}],
      skills: [{skill:"", id:nanoid()}]
    }
    this.handleChange = this.handleChange.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.addWorkExperience = this.addWorkExperience.bind(this);
    this.deleteWorkExperience = this.deleteWorkExperience.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
  }
  handleChange(event) {
    const {name, value} = event.target;
    let newState = this.state;
    newState.generalInformation = {...newState.generalInformation, [name]:value}
    this.setState(newState);
    console.log(this.state)
  }
  addEducation() {
    let newState = this.state;
    newState.education = [...newState.education, {school:"", subject:"", yearStarted:"", yearFinished:"", id:nanoid()}];
    this.setState(newState);
  }
  deleteEducation(item) {
    let newState = this.state;
    newState.education = newState.education.filter(education => education !== item)
    this.setState(newState);
  }
  addWorkExperience() {
    let newState = this.state;
    newState.workExperience = [...newState.workExperience, {company:"", position:"", yearStarted:"", yearFinished:"", id: nanoid()}];
    this.setState(newState);
  }
  deleteWorkExperience(item) {
    let newState = this.state;
    newState.workExperience = newState.workExperience.filter(work => work !== item)
    this.setState(newState);
  }
  addSkill() {
    let newState = this.state;
    newState.skills = [...newState.skills, {skill:"", id:nanoid()}];
    this.setState(newState);
  }
  deleteSkill(skill) {
    let newState = this.state;
    newState.skills = newState.skills.filter(skillObject => skillObject !== skill)
    this.setState(newState);
  }
  render(){
    return(
      <div className="main-container">
        <div className="sidebar">
          <GeneralInformation handleChange={this.handleChange} data={this.state} />
          <Education deleteEducation={this.deleteEducation} addEducation={this.addEducation} data={this.state} />
          <WorkExperience deleteWorkExperience={this.deleteWorkExperience} addWorkExperience={this.addWorkExperience} data={this.state} />
          <Skills addSkill={this.addSkill} deleteSkill={this.deleteSkill} data={this.state} />
        </div>
        <div className="cv-preview">

        </div>
      </div>
    )
  }
}

export {App};
// APP hold all data as state {
//   generalInformation: {
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     image: ""
//   },
//   education: [{school:"", subject:"", yearStarted:"", yearFinished:""}],
//   workExperience: [{company:"", position:"", yearStarted:"", yearFinished:""}],
//   skills: []
// }
// input side
// General information
// education - state number of inputs
// work experience - state number of inputs
// skills - state number of inputs

// preview all
