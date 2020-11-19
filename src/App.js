import React, { Component } from 'react';
import Search from './positions/components/Search'

class App extends  Component{
  render(){

    return(
      <>
        <Search 
          onSubmit = {this.handleSubmit}
        />
        <h3>- List of Positions</h3>
      </>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('description: ' + e.target.description.value)
    console.log('locatiion: ' + e.target.location.value)

    // STEP1: axio search function
    // STEP2: setState for positions
  }
}

export default App;
