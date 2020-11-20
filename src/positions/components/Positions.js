import React, { Component } from 'react';
import PositionRow from './PositionRow';


class Positions extends Component {
    render() {

        const showPositions = this.props.positions.map((position, index) => {
            return <PositionRow
                position={position}
            />
        })
        return (
            <div className="container">
                <h2>This is the Positions Component!</h2>
                <h3>Current Jobs</h3>
                <div>
                    {showPositions}
                </div>
            </div>
        )
    }

}

export default Positions;