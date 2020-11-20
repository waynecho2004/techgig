import React, { Component } from 'react'
import Positions from './Positions';

class Search extends Component {
  render() {
    return (
      <>
        <form onSubmit={this.props.onSubmit}>
            <div>
                <label>Job Description</label>
                <input type="text"
                    name="description"
                    placeholder="Job title, Keywords, Company" />
            </div>

            <div>
                <label>Location</label>
                <input type="text" 
                    name="location"
                    placeholder="City, Country, Postal Code" />
            </div>
            <br />

            <button type="submit">Search</button>
        </form>
        <Positions
          positions={this.props.positions}
        />

      </>
    )
  }
}
export default Search;



                    