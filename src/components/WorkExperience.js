import React, {Component} from "react";

class WorkExperience extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="work-experience-container">
                <h2 className="sidebar-title">Work Experience</h2>
                <div className="input-block">
                    <input className="sidebar-input" type="text" name="company" placeholder="Company" id="company"></input>
                    <input className="sidebar-input" type="text" name="position" placeholder="Position" id="position"></input>
                    <input className="sidebar-input" type="text" name="yearStarted" placeholder="Year Started" id="yearStarted"></input>
                    <input className="sidebar-input" type="text" name="yearFinished" placeholder="Year Finished" id="yearFinished"></input>
                    <button type="button" className="sidebar-button">Delete</button>
                </div>
                <button type="button" className="sidebar-button add-more-button">Add More</button>
            </div>
        )
    }
}

export {WorkExperience};