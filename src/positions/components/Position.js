import React, { Component } from 'react';


class Position extends Component {
  constructor(props) {
    super(props);
    this.state = {        
    }
}


  render() {

    const positions = this.props.positions.filter(position => {
      return position.id === this.props.id
    })
    const position = positions[0];
    
    // Write Filter method
    console.log('matching position', position);
    return (
      <div className="position">
        <p> Renders</p>
        {/* Job ID,type,URl,Created_at,Company,Company URL,,location,title,description*/}
        <h4>{position.title}</h4>
        <h4>{position.description}</h4>
      </div>
    )
  }
  
}
export default Position;