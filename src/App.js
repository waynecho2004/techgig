import React, { Component } from 'react';
import Search from './positions/components/Search'
import Positions from './positions/components/Positions';
import Position from './positions/components/Position';
import Favorites from './positions/components/Favorites';

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
      positions: [],
      current: {},
    }
  }

  componentDidMount() {
    
    let favorites = JSON.parse(localStorage.getItem('favorites')) 
    if((favorites) && (favorites.length !== 0)) {
      console.log('there is localstorage' + favorites.length);
    } else {  // For local testing only.  Remove for production
      console.log('there is NO localstorage');
      favorites = JOBDB.positions 
    }
    this.setState({
      favorites: favorites
    })

    this.getAllPositionsFromAPI();

  }  

  render() {
    return (
      <>
        <Route path='/' component={Nav} />
        <Route path='/' exact render={() => <h2>Welcome to TechGig Search!</h2>} />
        <Route path='/about' component={About} />

        <Route path='/favorites' render={(props) => {
          return <Favorites {...props}
            favorites={this.state.favorites} 
            handleRemoveFavoriteClick={this.handleRemoveFavorite} />;
        }} />

        <Route path='/search' render={(props) => {
          return <Search {...props}
            handleDetailsClick={this.handleDetailsClick}
            positions={this.state.positions}
            current={this.state.current}
            onSubmit={this.handleSubmit} />;
        }} />
        
        <Route path='/details/:id' exact render={(props) => {
          return <Position
            {...props}
          />
        }} />
      </>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('description: ' + e.target.description.value)
    console.log('locatiion: ' + e.target.location.value)
    this.getAllPositionsByFiltersFromAPI(e.target.description.value, e.target.location.value)

  }

  getAllPositionsFromAPI = () => {
    console.log('get all positions');
    this.getAllPositionsByFiltersFromAPI(null, null);
  }

  getAllPositionsByFiltersFromAPI = (description, location) => {
    console.log('get all positions by description and location');
    getAllPositions(description, location)
    .then((response) => {
          console.log(response.data);
          this.setState({
            positions: response.data
          })
        })
      .catch((error) => {
        console.log("error: ", error);
      })
  }

  handleDetailsClick = (current) => {
    console.log(`Fetching details for ${current}`)
    this.setState({ current: current });
  }

  handleRemoveFavorite = position => {
    console.log("remove favorite " + position.title);
   
    const newPositions = this.state.favorites.filter(p => {
      return p.id !== position.id
    });

    localStorage.setItem('favorites', JSON.stringify(newPositions));
    
    this.setState({
      favorites: newPositions,
    })
  }
}

export default App;
