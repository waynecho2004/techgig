import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


import AboutDB from '../../AboutDB';


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
            <div class="row">

                <div class="col-sm-12">
                    <h1>Change your world Using TechGig.</h1>
                    <p>Set your tech career in motion with TechGig</p>
                </div>

            </div>
            <div className="row">
                {trail}
            </div>

        </>
    )
}
export default About
