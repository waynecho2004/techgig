import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
      <>
        <form onSubmit={this.props.onSubmit}>
            <input type="text" placeholder="Job title, Keywords, Company" />
            <input type="text" placeholder="City, Country, Postal Code" />
            <button type="submit">Search</button>
        </form>
      </>
    )
  }
}
export default Search;



                    