import React, { Component } from 'react';


class Position extends Component {
  constructor(props) {
    super(props);
    this.state = {        
    }
}
  render() {
    // Write Filter method
    console.log(this.props);
    return (
      <div className="position">
        <p> Renders</p>
        {/* Job ID,type,URl,Created_at,Company,Company URL,,location,title,description*/}
        <h4>{this.props.position.type}</h4>
        <a href={this.props.url}></a>
        <h4>{this.props.created_at}</h4>
        <h4>{this.props.company}</h4>
        <h4>{this.props.company_url}</h4>
        <h4>{this.props.location}</h4>
        <h4>{this.props.title}</h4>
        <a href={this.props.url}></a>
        <p>
        {this.props.description}
        </p>
      </div>
    )
  }
  
}
export default Position;