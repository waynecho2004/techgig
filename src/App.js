import React, { Component } from 'react';
import Search from './positions/components/Search'
import Positions from './positions/components/Positions';
import { getAllPositions } from './api';

// testing
import axios from 'axios'

class App extends  Component{

  constructor(props) {
    super(props);

    this.state = {
      positions: [],

    }
  }

  render(){

    return(
      <>
        <Search onSubmit={this.handleSubmit}/>
        <Positions />
      </>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('description: ' + e.target.description.value)
    console.log('locatiion: ' + e.target.location.value)
    
    axios.get('https://jobs.github.com/positions.json')
    // STEP1: axio search function
  
    // getAllPositions(e.target.description.value, e.target.location.value)
    axios.get('https://jobs.github.com/positions.json?description=python&location=new+york')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error: ", error);
      })
      
    // STEP2: setState for positions
  }
}

export default App;
