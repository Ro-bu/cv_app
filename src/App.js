import React, {Component} from "react";
import {GeneralInformation} from "./components/GeneralInformation";
import {Education} from "./components/Education";
import {WorkExperience} from "./components/WorkExperience";
import {Skills} from "./components/Skills";

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
      education: [{school:"", subject:"", yearStarted:"", yearFinished:""}],
      workExperience: [{company:"", position:"", yearStarted:"", yearFinished:""}],
      skills: [""]
    }
  }
  render(){
    return(
      <div className="main-container">
        <div className="sidebar">
          <GeneralInformation data={this.state} />
          <Education data={this.state} />
          <WorkExperience data={this.state} />
          <Skills data={this.data} />
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
