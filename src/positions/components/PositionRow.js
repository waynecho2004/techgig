import React, { Component } from 'react';
import moment from 'moment';


const PositionRow = (props) =>  {
    const {
        id,
        type,
        created_at,
        company,
        location,
        title,
        company_logo,
        index
      } = props;
  
       
        return (
            <div className="position-item">
                <div className="company-logo">
                    <img src={company_logo} alt={company} width="100" height="100" />
                </div>
                <div className="position-info">
                    <div className="position-title">
                        <a href="#">{title}</a></div>
                    <div className="position-location">
                        {location} | {type}
                    </div>
                    <div className="company-name">{company}</div>
                </div>
                <div className="post-info">
                    <div className="post-time">
                        Posted {moment(new Date(created_at)).fromNow()}
                    </div>
                </div>

            </div>

        );

}

export default PositionRow; 