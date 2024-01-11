import React from 'react';
import { Row, Col, Nav, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <footer className="mt-auto py-5 my-5 border-top border-bottom">
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-5">
          <Col mb={3}>
            <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
              <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
            </a>
            <p className="text-body-secondary">LOGO DIGITAL COLLEGE AQUI © 2023</p>
          </Col>
          <Col mb={3}></Col>
          <Col mb={3}>
            <h5>Section</h5>
            <Nav className="flex-column">
              <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-body-secondary">Home</Nav.Link></Nav.Item>
              <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-body-secondary">Features</Nav.Link></Nav.Item>
              <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-body-secondary">Pricing</Nav.Link></Nav.Item>
              <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-body-secondary">FAQs</Nav.Link></Nav.Item>
              <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-body-secondary">About</Nav.Link></Nav.Item>
            </Nav>
          </Col>
          <Col mb={3}>
            <h5>Section</h5>
            <Nav className="flex-column">
              <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-body-secondary">Home</Nav.Link></Nav.Item>
              <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-body-secondary">Features</Nav.Link></Nav.Item>
              <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-body-secondary">Pricing</Nav.Link></Nav.Item>
              <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-body-secondary">FAQs</Nav.Link></Nav.Item>
              <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-body-secondary">About</Nav.Link></Nav.Item>
            </Nav>
          </Col>
          <Col mb={3}>
            <h5>Section</h5>
            <Nav className="flex-column">
              <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-body-secondary">Home</Nav.Link></Nav.Item>
              <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-body-secondary">Features</Nav.Link></Nav.Item>
              <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-body-secondary">Pricing</Nav.Link></Nav.Item>
              <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-body-secondary">FAQs</Nav.Link></Nav.Item>
              <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-body-secondary">About</Nav.Link></Nav.Item>
            </Nav>
          </Col>
        </Row>
      </footer>
    </div>
  );
}

export default Footer;
