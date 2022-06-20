import React, {Component} from "react";
import nanoid from "nanoid";
import {CvHeader} from "./CvHeader";

class CvPreview extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="cv-preview">
                <CvHeader data={this.props.data} />
            </div>
        )
    }
}

export {CvPreview};