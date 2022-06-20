import React, {Component} from "react";

class GeneralInformation extends Component{
    constructor(props){
        super(props);
    }
    

    render() {
        return(
            <div className="general-information">
                <h2 className="sidebar-title">Personal Information</h2>
                <input value={this.props.data.generalInformation.firstName} onChange={this.props.handleChange} className="sidebar-input" type="text" name="firstName" placeholder="First Name" id="firstName"></input>
                <input value={this.props.data.generalInformation.lastName} onChange={this.props.handleChange} className="sidebar-input" type="text" name="lastName" placeholder="Last Name" id="lastName"></input>
                <input value={this.props.data.generalInformation.occupation} onChange={this.props.handleChange} className="sidebar-input" type="text" name="occupation" placeholder="Occupation" id="occupation"></input>
                <input value={this.props.data.generalInformation.phone} onChange={this.props.handleChange} className="sidebar-input" type="text" name="phone" placeholder="Phone Number" id="phone"></input>
                <input value={this.props.data.generalInformation.email} onChange={this.props.handleChange} className="sidebar-input" type="text" name="email" placeholder="Email" id="email"></input>
                <textarea value={this.props.data.generalInformation.description} onChange={this.props.handleChange} className="sidebar-input" placeholder="Description" name="description" id="description"></textarea>
            </div>
        )
    }
}

export{GeneralInformation};