import React from 'react'

import {Row,Container,Card,Col} from 'react-bootstrap'

const Footer = () => {
  return (
      <footer>
        <Container className='px-0'  fluid style={{height : '5rem' }}>
            <Row className='mx-0'>
                <Col className='text-center'>Footer</Col>
            </Row>
        </Container>
      </footer>

  )
}

export default Footer