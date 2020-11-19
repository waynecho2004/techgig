import React, { Component } from 'react';
import Position from './Position'
class Position extends Component {
  render() {
    return (
      <div className="position">
        {/* Job ID,type,URl,Created_at,Company,Company URL,,location,title,description*/}
        <h4>{this.props.type}</h4>
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