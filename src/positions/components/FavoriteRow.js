import React, { Component } from 'react';
import FavoriteDeleteButton from './FavoriteDelete';


class FavoriteRow extends Component {
    render() {
        const COMPANY = this.props.position.company;
        const TITLE = this.props.position.title;
        return (
            <div className="wrapper">
                <div className="row" >
                    <div>
                        <h3>{COMPANY}</h3>
                    </div>
                    <div>
                        <a href="#" className="btn-small waves-effect waves-light">{TITLE}</a>

                    </div>
                </div>
                <FavoriteDeleteButton onClick={this.props.handleRemoveFavoriteClick}/>
            </div>
        );
    }
}

export default FavoriteRow; 