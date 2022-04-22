import React from 'react'
import {Navbar,Container,Nav,} from 'react-bootstrap'

const Header = () => {
  return (
    <>
    <header>
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">FC Market</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home"><i className="fa fa-shopping-cart"></i></Nav.Link>
      <Nav.Link href="#features"><i className='fa fa-user'></i></Nav.Link>
    </Nav>
    </Container>
    </Navbar>
    </header>
    <br />
    </>
  )
}

export default Header