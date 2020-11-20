import React, { Component } from 'react';
import Search from './positions/components/Search'
import Positions from './positions/components/Positions';

// Routes
import { Route } from 'react-router-dom';
import Nav from './shared/components/Nav';
import About from './pages/components/About'

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
      current: {},
    }
  }

  render() {
    return (
      <>
        <Route path='/' component={Nav} />
        <Route path='/' exact render={() => <h2>Welcome to TechGig Search!</h2>} />
        <Route path='/favorites' exact render={() => <h2>WIP!</h2>} />
        <Route path='/about' component={About} />
        
        <Route path='/search' render={(props) => {
          return <Search {...props}  
          positions={this.state.positions}      
          onSubmit={this.handleSubmit} />;
        }} />

       
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
        headers: { "Access-Control-Allow-Origin": "*" },
      }
    ).then((response) => {
      console.log(response.data);
    })
      .catch((error) => {
        console.log("error: ", error);
      })

    // STEP2: setState for positions
  }

  handleDetailsClick = (position) => {
    console.log(`Fetching details for ${position}`)
    this.setState({ current: position });
  }
}

export default App;
