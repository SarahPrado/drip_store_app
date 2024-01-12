import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Menu from '../Menu/Menu';

const Header = () => {
  return (
  <div>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          {/* Digital College à esquerda */}
          <Navbar.Brand href="#" className="me-auto">Digital College</Navbar.Brand>

          {/* Search no meio */}
          <Form className="d-flex mx-auto">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
            <Button variant="outline-success">Search</Button>
          </Form>

          {/* Links à direita */}
          <Nav className="ms-auto" navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Categorias</Nav.Link>
            <Nav.Link href="#">Link</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
{/* Chamando o Componente Menu */}
      <Menu />
  </div>
  
  )
}

export default Header