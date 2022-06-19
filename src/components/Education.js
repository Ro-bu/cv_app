import React, {Component} from "react";

class Education extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="education-container">
                <h2 className="sidebar-title">Education</h2>
                <div className="input-block">
                    <input className="sidebar-input" type="text" name="school" placeholder="School" id="school"></input>
                    <input className="sidebar-input" type="text" name="subject" placeholder="Subject" id="subject"></input>
                    <input className="sidebar-input" type="text" name="yearStarted" placeholder="Year Started" id="yearStarted"></input>
                    <input className="sidebar-input" type="text" name="yearFinished" placeholder="Year Finished" id="yearFinished"></input>
                    <button type="button" className="sidebar-button">Delete</button>
                </div>
                <button type="button" className="sidebar-button add-more-button">Add More</button>
            </div>
        )
    }
}

export {Education};