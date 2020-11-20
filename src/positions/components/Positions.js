import React, { Component } from 'react';
import PositionRow from './PositionRow';


class Positions extends Component {
    render() {
        const showPositions = this.props.positions.map((position, index) => {
            return <PositionRow
                key={position.id}
                {...position}
                index={index}
                handleDetailsClick={() => this.props.handleDetailsClick(position)}
            />
        })
        return (
            <div className="container">              
                <h2 className="section-title">Jobs Listing</h2>              
                {showPositions}
            </div>
        )
    }
}

export default Positions;