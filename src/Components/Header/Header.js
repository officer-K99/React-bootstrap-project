import React from 'react'

import {Navbar,Container,Nav,} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header>
    <Navbar bg="primary" variant="dark">
    <Container>
    <Link to='/'><Navbar.Brand style={{display : 'inline'}} as='p' >FC Market</Navbar.Brand></Link>
    <Nav className="me-auto">
     <Link to='/cart'><Nav.Link style={{display : 'inline'}} as='p' ><i className="fa fa-shopping-cart"></i></Nav.Link></Link> 
     <Link to='/account'><Nav.Link style={{display : 'inline'}} as='p' ><i className='fa fa-user'></i></Nav.Link></Link> 
    </Nav>
    </Container>
    </Navbar>
    </header>
    <br />
    </>
  )
}

export default Header