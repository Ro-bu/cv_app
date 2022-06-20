import React, {Component} from "react";

class WorkExperience extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let workExperienceBlocks = this.props.data.workExperience.map((work) => {
            return (
                <div key={work.id} className="input-block">
                    <input value={work.company} onChange={(e) => this.props.handleChange(e, work)} className="sidebar-input" type="text" name="company" placeholder="Company" id="company"></input>
                    <input value={work.position} onChange={(e) => this.props.handleChange(e, work)} className="sidebar-input" type="text" name="position" placeholder="Position" id="position"></input>
                    <input value={work.yearStarted} onChange={(e) => this.props.handleChange(e, work)} className="sidebar-input" type="text" name="yearStarted" placeholder="Year Started" id="yearStarted"></input>
                    <input value={work.yearFinished} onChange={(e) => this.props.handleChange(e, work)} className="sidebar-input" type="text" name="yearFinished" placeholder="Year Finished" id="yearFinished"></input>
                    <button onClick={() => this.props.deleteWorkExperience(work)}type="button" className="sidebar-button">Delete</button>
                </div>
            )
        })
        return (
            <div className="work-experience-container">
                <h2 className="sidebar-title">Work Experience</h2>
                {workExperienceBlocks}
                <button onClick={this.props.addWorkExperience} type="button" className="sidebar-button add-more-button">Add More</button>
            </div>
        )
    }
}

export {WorkExperience};