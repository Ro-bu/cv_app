import React, {Component} from "react";
import nanoid from "nanoid";
import {CvHeader} from "./CvHeader";
import {CvEducation} from "./CvEducation";
import {CvWorkExperience} from "./CvWorkExperience";
import {CvSkills} from "./CvSkills";

class CvPreview extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="cv-preview">
                <CvHeader data={this.props.data} />
                <CvEducation data={this.props.data} />
                <CvWorkExperience data={this.props.data} />
                <CvSkills data={this.props.data} />
            </div>
        )
    }
}

export {CvPreview};