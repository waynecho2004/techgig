import React, { Component } from 'react';
import PositionRow from './PositionRow';
//import '../../css/styles.css';

import { Table, NavLink } from "react-bootstrap";

class Positions extends Component {
    render() {
        let keys = ["Company", "Position", "Date", "Favorite"];
        const showPositions = this.props.positions.map((position, index) => {
            return <PositionRow
                href={position.id}
                key={position.id}
                {...position}
                index={index}
                current={this.props.current}
                handleDetailsClick={() => this.props.handleDetailsClick(position)}
                handleAddFavoriteClick={() => this.props.handleAddFavoriteClick(position)}
            />
        })
        return (
            <div style={{ margin: "0 auto" }}>
                <h2 style={{ textAlign: "center", margin: "20px auto auto" }}> Job Listings </h2>

                <Table
                    variant="default"
                    style={{ width: "100%", margin: "20px auto" }}
                    striped
                    bordered
                    responsive>
                    <thead>
                        <tr>
                            {keys.map(heading => {
                                return <td key={heading}>{heading}</td>;
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {showPositions}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Positions;