import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import LikeButton from './ClickableButton';

const PositionRow = (props) => {
    const {
        id,
        type,
        created_at,
        company,
        location,
        title,
        company_logo,
        index,
        handleAddFavoriteClick
    } = props;
    // console.log(id);
    return (
        <>
        <tr key={id}>
               <td><img src={company_logo} alt={company} width="100" height="100" /></td>
               <td><div className="position-title">
                        <Link to={'/positions/details/' + id}>{title}</Link>
                    </div>
                    <div className="position-location">
                        {location} | {type}
                    </div>
                    <div className="company-name">{company}</div>
                    </td>
               <td><div className="post-time">
                        Posted {moment(new Date(created_at)).fromNow()}
                    </div></td>
               <td> <div className="post-like">
                        <LikeButton onClick={handleAddFavoriteClick} buttonTitle='Like' />
                    </div></td>
             </tr>
       
            
        </>
    );
}

export default PositionRow; 