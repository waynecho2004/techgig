import React, { Component } from "react";
class Position extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    const positions = this.props.positions.filter(position => {
      return position.id === this.props.id
    })
    const position = positions[0];
    
    // Write Filter method
    /*const position = this.props.positions.filter((position) => {
      return position.id === this.props.id;
    });*/

    return (
      <div className="position">
        {/* Job ID,type,URl,Created_at,Company,Company URL,,location,title,description*/}
        <h4>Type: {position.title}</h4>
        <a href={position.url}> GITHUB Posting </a>
        <h4>Created: {position.created_at}</h4>
        <h4>Company Name: {position.company}</h4>
        <a href={position.company_url}>Company URL</a>
        <h4>Location: {position.location}</h4>
        <h4>Job Title: {position.title}</h4>
        <p>Job Description: {position.description}</p>
        <a href={position.how_to_apply}>How To Apply</a>
      </div>
    );
  }
}
export default Position;
