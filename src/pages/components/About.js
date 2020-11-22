import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//https://materializecss.com/images/sample-1.jpg

import AboutDB from '../../AboutDB';
//width: 18rem;
const About = () => {
    const trail = AboutDB.us.map(t => {
        return (

            <div className="card" style={{ width: 15 + 'rem' }}>
                <img className="card-img-top" src={t.imgSmall} />
                <div className="card-body">
                    <div className="card-title">{t.name}</div>
                    <div className="card-description">{t.description} </div>
                </div>
            </div>
        )
    });
    return (
        <>

            <div className="row">
                {trail}
            </div>


        </>
    )
}
export default About
