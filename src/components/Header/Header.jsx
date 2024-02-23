import React from 'react';
import { Navbar, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="bg-dark justify-content-between w-full">
      <Link to="/">
        <span className="text-light">Text</span>
      </Link>
      <Form>
        <Row>
          <Col xs="auto">
            <Link to="#">
            <Button variant="light" style={{height: '40px'}}><img src='src\assets\icons8-moon-symbol-30.png' alt='Dark Theme Logo'/></Button>
            </Link>
          </Col>
          <Col xs="auto">
            <Link to="addNote">
              <Button variant="primary">+</Button>
            </Link>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default Header;
