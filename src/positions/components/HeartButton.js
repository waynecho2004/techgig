import React, { Component } from 'react';
import HeartCheckbox from 'react-heart-checkbox';

class HeartButton extends Component {
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
          <>
            <HeartCheckbox className='red-heart-checkbox' checked={checked} onClick={this.onClick} />
          </>
        );
    }
  }
  export default HeartButton;
  