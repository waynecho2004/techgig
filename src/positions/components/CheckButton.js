import React, { Component } from 'react';


class CheckButton extends Component {
    constructor() {
      super();
      this.state = {
        checked: false
      };
      this.handleClick = this.handleClick.bind(this);
    } 
    
    handleClick() {
        this.setState({ checked: !this.state.checked });
    }

    onClick = (evnet, props) => {
        this.setState({ checked: !this.state.checked });
    }
    
    render() {
        const { checked } = this.state;
 
        return (
            <div>
            <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/>
           
          </div>
        );
    }
  }
  export default CheckButton;
  