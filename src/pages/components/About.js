import React from 'react'
import AboutDB from '../../AboutDB';

import { Card, CardGroup, Row, Col, Container, CardDeck } from 'react-bootstrap';

const About = () => {
    const us = AboutDB.us.map((t) => {

        return (
            <Card className="text-center" key={t.id} style={{ width: 15 + 'rem' }}>
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
            <CardDeck>
                <Card>
                    <Card.Header>A dream team that understands your skills.
                                We offer tailored solutions to solve your particular problem in the most efficient way possible.</Card.Header>
                    <Card.Body>
                        <CardGroup>{us}
                        </CardGroup>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>

            </CardDeck>
        </>
    )
}
export default About;
