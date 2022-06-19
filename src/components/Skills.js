import React, {Component} from "react";
import trashIcon from "../images/trash.png";

class Skills extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="skills-container">
                <h2 className="sidebar-title">Skills</h2>
                <div className="skills-input">
                    <input className="sidebar-input" type="text" name="skill" placeholder="Skill" id="skill"></input>
                    <div className="skill-trash">
                        <img className="skill-trash-icon" src={trashIcon} alt="delete skill"></img>
                    </div>
                </div>
                <button type="button" className="sidebar-button add-more-button">Add More</button>
            </div>
        )
    }
}

export {Skills};