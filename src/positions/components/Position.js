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
    const showPositionDetails = this.props.positions.filter(position => {
      return position.id === this.props.match.params.id;
    });     
     
    console.log(showPositionDetails);

    return (
      <div className="position">
        <h4>{showPositionDetails.type}</h4>
      </div>
    )
  }
  
}
export default Position;