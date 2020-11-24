import React from 'react'
import AboutDB from '../../AboutDB';

import { Card, Row, Col, Container } from 'react-bootstrap';

const About = () => {
    const us = AboutDB.us.map((t) => {

        return (
            <Card key={t.id} style={{ width: 15 + 'rem' }}>
                <Card.Img variant="top" src={t.imgSmall} alt="/logo192.png" />
            
                <Card.Body>
                    <Card.Title>{t.name}</Card.Title>
                    <Card.Text>{t.description} </Card.Text>
                </Card.Body>
            </Card>
        )
    });
    return (
        <>
            <Container>
                <Row className="col-sm-12">
                    <Col >
                        <h1>Change your world Using TechGig.</h1>
                        <p>Set your tech career in motion with TechGig</p>
                    </Col>
                </Row>
                <Row>
                    {us}
                </Row>
            </Container>
        </>
    )
}
export default About;
