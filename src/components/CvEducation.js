import React, {Component} from "react";

class CvEducation extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let educationBlocks = this.props.data.education.map((school) => {
            return(
                <div key={school.id} className="cv-content-block">
                    <div className="cv-years">
                        <p className="cv-years-text">{school.yearStarted +" - " + school.yearFinished}</p>
                    </div>
                    <div className="cv-inner-content-block">
                        <h2 className="inner-block-title">{school.school}</h2>
                        <p className="inner-block-subtitle">{school.subject}</p>
                    </div>
                </div>
            )
        })
        return(
            <div className="cv-education">
                <div className="title-container">
                    <h2 className="block-title">Education</h2>
                </div>
                {educationBlocks}
            </div>
        )
    }
}

export {CvEducation};