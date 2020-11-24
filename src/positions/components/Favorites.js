import React, { Component } from 'react';
import FavoriteRow from './FavoriteRow';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';

class Favorites extends Component {
    render() {

        const showPositions = this.props.favorites.map((position, index) => {
            return <FavoriteRow
                href={position.id}
                key={position.id}
                {...position}
                index={index}
                current={this.props.current}
                handleDetailsClick={() => this.props.handleDetailsClick(position)}
                handleRemoveFavoriteClick = {() => this.props.handleRemoveFavoriteClick(position)}
            />
        })
        return (
            <Container>
              <h2 className="section-title">Favorite Jobs Listing</h2> 
                <div>
                    {showPositions}
                </div>
            </Container>
        )
    }

}

export default Favorites;