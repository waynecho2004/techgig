import React, { Component } from 'react';
import FavoriteRow from './FavoriteRow';


class Favorites extends Component {
    render() {

        const showPositions = this.props.favorites.map((position, index) => {
            return <FavoriteRow
                position={position}  
                handleRemoveFavoriteClick = {() => this.props.handleRemoveFavoriteClick(position)}
            />
        })
        return (
            <div className="container">
                <h3>Favorite Jobs</h3>
                <div>
                    {showPositions}
                </div>
            </div>
        )
    }

}

export default Favorites;