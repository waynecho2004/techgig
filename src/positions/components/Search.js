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
            <Row>
              <Col>
                <Form.Group controlId="formDescription">
                  <Form.Label>Job Description</Form.Label>
                  <Form.Control type="text"
                    name="description"
                    placeholder="Job title, Keywords, Company"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formLocation">
                  <Form.Label>Location</Form.Label>
                  <Form.Control type="text"
                    name="location"
                    placeholder="City, Country, Postal Code" />
                </Form.Group>
              </Col>
            </Row>
            <Button type='submit'>Search</Button>
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



