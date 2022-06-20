import React, {Component} from "react";
import trashIcon from "../images/trash.png";

class Skills extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let skillBlocks = this.props.data.skills.map((skill) => {
            return(
                <div key={skill.id} className="skills-input">
                    <input value={skill.skill} onChange={(e) => this.props.handleChange(e, skill)} className="sidebar-input" type="text" name="skill" placeholder="Skill" id="skill"></input>
                    <div onClick={() => this.props.deleteSkill(skill)}className="skill-trash">
                        <img className="skill-trash-icon" src={trashIcon} alt="delete skill"></img>
                    </div>
                </div>
            )
        })

        return (
            <div className="skills-container">
                <h2 className="sidebar-title">Skills</h2>
                {skillBlocks}
                <button onClick={this.props.addSkill} type="button" className="sidebar-button add-more-button">Add More</button>
            </div>
        )
    }
}

export {Skills};