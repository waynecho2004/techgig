import React, { Component } from 'react';
import PositionRow from './PositionRow';
//import '../../css/styles.css';

class Positions extends Component {
    render() {
        const showPositions = this.props.positions.map((position, index) => {
            return <PositionRow
                href={position.id}
                key={position.id}
                {...position}
                index={index}
                current={this.props.current}
                handleDetailsClick={() => this.props.handleDetailsClick(position)}
                handleAddFavoriteClick = {() => this.props.handleAddFavoriteClick(position)}
            />
        })
        return (
            <div className="container">                          
                {showPositions}
            </div>
        )
    }
}

export default Positions;