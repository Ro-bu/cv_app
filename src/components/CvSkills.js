import React, {Component} from "react";

class CvSkills extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let skillBlocks = this.props.data.skills.map((skill) => {
            return(
                <div key={skill.id} className="skill-block">
                    <p className="skill-text">{skill.skill}</p>
                </div>
            )
        })
        return(
            <div className="cv-skills">
            <div className="title-container">
                <h2 className="block-title">Skills</h2>
            </div>
            <div className="skills-container">
                {skillBlocks}
            </div>
        </div>
        )
    }
}

export{CvSkills};