import React, { Component } from 'react'
import Positions from './Positions';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container, Form, Button, Card } from 'react-bootstrap';

class Search extends Component {
  render() {
    return (
      <>
        <Card style={{ marginTop: 0, borderRadius: 0 }}>
          <Card.Body>
            <Card.Title>Search For Better Jobs On TechGig</Card.Title>
            <Form onSubmit={this.props.onSubmit}>
              <Row>
                <Col md="5">
                  <Form.Group controlId="formDescription">
                    <Form.Control type="text"
                      name="description"
                      placeholder="Job title, Keywords, Company"
                    />
                  </Form.Group>
                </Col>
                <Col md="5">
                  <Form.Group controlId="formLocation">
                    <Form.Control type="text"
                      name="location"
                      placeholder="City, Country, Postal Code" />
                  </Form.Group>
                </Col>
                <Col md="">
                  <Button variant="primary" size="sm" type='submit'>Search</Button>
                </Col>
              </Row>
            </Form>


          </Card.Body>
        </Card>



        <Positions
          positions={this.props.positions}
          handleAddFavoriteClick={this.props.handleAddFavoriteClick}
        />
      </>
    )
  }
}
export default Search;



