import React, { Component } from 'react'
import Positions from './Positions';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container, Form, Button } from 'react-bootstrap';

class Search extends Component {
  render() {
    return (
      <>
        <Container>
          <Form onSubmit={this.props.onSubmit}>
            <Form.Label>Search For Better Jobs On TechGig</Form.Label>
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
          <Positions
            positions={this.props.positions}
            handleAddFavoriteClick={this.props.handleAddFavoriteClick}
          />
        </Container>
      </>
    )
  }
}
export default Search;



