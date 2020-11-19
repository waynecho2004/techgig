import React, { Component } from 'react'

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
      </>
    )
  }
}
export default Search;



                    