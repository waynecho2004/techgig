import React, { Component } from 'react';



class PositionRow extends Component {
    render() {
        const company = this.props.position.company;
        const title = this.props.position.title;
        const location = this.props.position.location;
        const type = this.props.position.type;
        return (
            <div className="position-item">
                <div className="company-logo">
                    <img src={this.props.position.company_logo} alt={company} width="100" height="100" />
                </div>
                <div className="position-info">
                    <div className="position-title">
                        <a href="#">{title}</a></div>
                    <div className="position-location">
                        {location} | {type}
                    </div>
                    <div className="company-name">{company}</div>
                </div>

            </div>

        );
    }
}

export default PositionRow; 