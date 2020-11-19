import React, { Component } from 'react';
import Position from './Position';


class Positions extends Component {
  
    render() {
		return (
			<div className="container">
				<h2>This is the Positions Component!</h2>
				<h3>Current Jobs</h3>
                <div className="row">
                <div className="col-md-8">
                <ol>
					<li>
						<div>
							<h4>Director, Engineering</h4>
							<p>Insurance company looking for a new Director for Engineering!</p>
						</div>
					</li>
					<li>
						<div>
							<h4>Programmer</h4>
							<p>Need someone to create my startup site!</p>
						</div>
					</li>
					<li>
						<div>
							<h4>Full Stack Engineer</h4>
							<p>ResoluteAI is a fast-growth data aggregation and intelligent search startup, looking for Full-Stack Engineer</p>
						</div>
					</li>
				</ol>
                
                </div>
                </div>
			</div>
		)
	}
     
}

export default Positions;