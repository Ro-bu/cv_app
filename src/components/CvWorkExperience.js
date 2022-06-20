import React, {Component} from "react";

class CvWorkExperience extends Component {
    constructor(props){
        super(props)
    }
    render(){
        let workBlocks = this.props.data.workExperience.map((work) => {
            return(
                <div key={work.id} className="cv-content-block">
                    <div className="cv-years">
                        <p className="cv-years-text">{work.yearStarted +" - " + work.yearFinished}</p>
                    </div>
                    <div className="cv-inner-content-block">
                        <h2 className="inner-block-title">{work.company}</h2>
                        <p className="inner-block-subtitle">{work.position}</p>
                    </div>
                </div>
            )
        })
        return(
            <div className="cv-work">
            <div className="title-container">
                <h2 className="block-title">Work Experience</h2>
            </div>
            {workBlocks}
        </div>
        )
    }
}

export{CvWorkExperience};