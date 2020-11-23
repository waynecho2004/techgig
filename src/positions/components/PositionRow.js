import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import LikeButton from './LikeButton';
import HeartButton from './HeartButton';
import CheckButton from './CheckButton';

const PositionRow = (props) => {
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
<<<<<<< HEAD
 // console.log(id);
=======
    console.log(id);
>>>>>>> techgig-route
    return (
        <>
            <div className="position-item">
                <div className="company-logo">
                    <img src={company_logo} alt={company} width="100" height="100" />
                </div>
                <div className="position-info" >
                    <div className="position-title">
                        <Link to={'/details/' + id}>{title}</Link>
                    </div>
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
                <div className="post-info">
                    <div className="post-like">
                        <LikeButton />
                    </div>
                </div>
                <div className="post-info">
                    <div className="post-like">
                        <CheckButton />
                    </div>
                </div>

            </div>
        </>
    );
}

export default PositionRow; 