import React, {Component} from "react";

class CvHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="cv-header">
                <h2 className="cv-name">{this.props.data.generalInformation.firstName + " " + this.props.data.generalInformation.lastName}</h2>
                <h3 className="cv-occupation">{this.props.data.generalInformation.occupation}</h3>
                <div className="cv-header-contact">
                    <p className="cv-header-contact-text"><span>PHONE: </span>{this.props.data.generalInformation.phone}</p>
                    <p className="cv-header-contact-text"><span>EMAIL: </span>{this.props.data.generalInformation.email}</p>
                </div>
                <p className="cv-description">{this.props.data.generalInformation.description}</p>
            </div>
        )
    }
}

export {CvHeader};