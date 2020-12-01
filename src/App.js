/**
 * This is a react app
 */
import React, { Component } from 'react';
import Search from './positions/components/Search'

import Position from './positions/components/Position';
import Favorites from './positions/components/Favorites';

// Routes
import { Route } from 'react-router-dom';
import Navigation from './shared/components/Nav';
import Welcome from './pages/components/Welcome';
import About from './pages/components/About'
import './css/styles.css'

import { getAllPositions } from './api';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      positions: [],
      current: {},
      favorites: [],
    }
  }

  componentDidMount() {

    let favorites = JSON.parse(localStorage.getItem('favorites'))

    if (!this.isFavoritesEmpty(favorites)) {
      console.log('there is NO localstorage');
      favorites = []
    }

    this.setState({
      favorites: favorites
    })

  }
  // Check if the Favorites is Empty
  isFavoritesEmpty(favorites) {
    return (favorites) && (favorites.length !== 0)
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

  handleAddFavorite = position => {
    console.log("add to favorites: " + position.title);

    const positions = this.state.favorites;

    let positionFound = positions.findIndex(p => p.id === position.id)

    // add new position
    if (positionFound === -1) {
      positions.push(position);

      localStorage.setItem('favorites', JSON.stringify(positions));

      this.setState({
        favorites: positions,
      })
    } else {
      console.log("position already exists, no action");
    }
  }

  render() {
    return (
      <>
        <div className="container">
        
          <Route path='/' component={Navigation} />
          {/* <Route path='/' exact render={() => <h2>Welcome to TechGig Search!</h2>} /> */}
          <Route path='/' exact render={Welcome} />
          <Route path='/about' component={About} />
          <Route path='/favorites/details/:id' exact render={(props) => {
            const id = props.match.params.id
            return <Position
              {...props}
              positions={this.state.favorites}
              id={id}
            />
          }} />

          <Route path='/favorites' exact render={(props) => {
            return <Favorites {...props}
              favorites={this.state.favorites}
              handleRemoveFavoriteClick={this.handleRemoveFavorite} />;
          }} />

          <Route path='/search' exact render={(props) => {
            return <Search {...props}
              handleDetailsClick={this.handleDetailsClick}
              positions={this.state.positions}
              current={this.state.current}
              handleAddFavoriteClick={this.handleAddFavorite}
              onSubmit={this.handleSubmit} />;
          }} />

          <Route path='/positions/details/:id' exact render={(props) => {
            const id = props.match.params.id
            return <Position
              {...props}
              positions={this.state.positions}
              id={id}
            />
          }} />

        </div>

      </>
    )
  }
}

export default App;