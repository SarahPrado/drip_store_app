import React from 'react'
import { Nav } from 'react-bootstrap'
import './Menu.css'

const Menu = () => {
  return (
    <div>
     <Nav variant="underline" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link className="link-RosaDigital" href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="link-RosaDigital" eventKey="link-1">Produtos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="link-RosaDigital" eventKey="link-2">Categorias</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="link-RosaDigital" eventKey="link-3">Meus Pedidos</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  )
}

export default Menu
