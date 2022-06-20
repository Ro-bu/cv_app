import React, {Component} from "react";

class Education extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        let educationBlocks = this.props.data.education.map((education) => {
            return(
                <div key={education.id} className="input-block">
                    <input value={education.school} onChange={(e) => this.props.handleChange(e, education)} className="sidebar-input" type="text" name="school" placeholder="School" id="school"></input>
                    <input value={education.subject} onChange={(e) => this.props.handleChange(e, education)} className="sidebar-input" type="text" name="subject" placeholder="Subject" id="subject"></input>
                    <input value={education.yearStarted} onChange={(e) => this.props.handleChange(e, education)} className="sidebar-input" type="text" name="yearStarted" placeholder="Year Started" id="yearStarted"></input>
                    <input value={education.yearFinished} onChange={(e) => this.props.handleChange(e, education)} className="sidebar-input" type="text" name="yearFinished" placeholder="Year Finished" id="yearFinished"></input>
                    <button onClick={() => this.props.deleteEducation(education)} type="button" className="sidebar-button">Delete</button>
                </div>
            )
        })

        return (
            <div className="education-container">
                <h2 className="sidebar-title">Education</h2>
                {educationBlocks}
                <button onClick={this.props.addEducation} type="button" className="sidebar-button add-more-button">Add More</button>
            </div>
        )
    }
}

export {Education};