import React from 'react'
import AboutDB from '../../AboutDB';
import '../../css/styles.css';

const About = () => {
    const us = AboutDB.us.map((t) => {
        
        return (
            <div key = {t.id} className="card" style={{ width: 15 + 'rem' }}>
                <img className="card-img-top" src={t.imgSmall} alt='/images/logo192.png' />
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
                <div className="col-sm-12">
                    <h1>Change your world Using TechGig.</h1>
                    <p>Set your tech career in motion with TechGig</p>
                </div>
            </div>
            <div className="row">
                {us}
            </div>
        </>
    )
}
export default About;
