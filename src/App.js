import React, { Component } from 'react';
import Positions from './positions/components/Positions';

class App extends  Component{
  render(){

    return(
      <>
      <h1>Job Search</h1>
<div>

<button>Search</button>
</div>
<Positions />
      </>
    )
  }
}

export default App;
