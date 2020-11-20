import React, { Component } from 'react';
import Search from './positions/components/Search'
import Positions from './positions/components/Positions';
import { getAllPositions } from './api';

// testing
import axios from 'axios'
import JOBDB from './JOBDB';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      //positions: [],
      positions: JOBDB.positions,

    }
  }

  render() {

    return (
      <>
        <Search onSubmit={this.handleSubmit} />
      
        <Positions
          positions={this.state.positions}
          />
      </>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('description: ' + e.target.description.value)
    console.log('locatiion: ' + e.target.location.value)
    // axios.get('https://jobs.github.com/positions.json',{crossDomain : true}).then

    // STEP1: axio search function

    // getAllPositions(e.target.description.value, e.target.location.value)
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.withCredentials = true;
    axios.defaults.crossDomain = true;
    axios.get('https://jobs.github.com/positions.json',
      {
        headers: {"Access-Control-Allow-Origin": "*"},
      }
        ).then((response) => {
          console.log(response.data);
        })
      .catch((error) => {
        console.log("error: ", error);
      })

    // STEP2: setState for positions
  }
}

export default App;
