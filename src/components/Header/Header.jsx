import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Menu from '../Menu/Menu';
import './Header.css'

const Header = () => {
  return (
  <div>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          {/* Digital College à esquerda */}
          <Navbar.Brand href="#" className="me-auto">
          <img src="src/assets/logo/logocompletadigitalcollege.svg" height='55%' alt="" />
          </Navbar.Brand>

          {/* Search no meio */}
          <Form className="d-flex mx-auto">
            <Form.Control type="search" placeholder="Search" className="me-2 tamSearch" aria-label="Search"/>
            <Nav.Link href="#action1">
              <img src="src/assets/icon/Search.svg" height='55%' alt="" />
            </Nav.Link>

          </Form>

          {/* Links à direita */}
          <Nav className="ms-auto" navbarScroll>
            <Nav.Link href="#action1">Cadastre-se</Nav.Link>
            <Button variant="outline-success">Entrar</Button>
            <Nav.Link href="#action2">
              <img className="imgcarrinho" src="src/assets/icon/carrinho.svg" height='55%' alt="" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
{/* Chamando o Componente Menu */}
      <Menu />
  </div>
  
  )
}

export default Header

