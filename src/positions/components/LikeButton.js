import React, { Component } from 'react';
class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        liked: false
      };
      this.handleClick = this.handleClick.bind(this);
    } 
    
    handleClick() {
      this.setState({
        liked: !this.state.liked
      });
    }
    
    render() {
      const text = this.state.liked ? 'liked' : 'haven\'t liked';
      const label = this.state.liked ? 'Unlike' : 'Like'
      return (
        <div className="customContainer">
          <button className="btn btn-primary  btn-sm" onClick={this.handleClick}>
            {label}</button>
        </div>
      );
    }
  }
  export default LikeButton;
  