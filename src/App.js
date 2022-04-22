import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import {Container,Card,Button} from 'react-bootstrap'

const App = () => {
  return (
    <>
    <Header />
    <Container as='main'>
      <Card className='justify-items-center' style={{width : '100%' }}>
        <Card.Header>
          <Card.Title>FC Market</Card.Title>
        </Card.Header>
        <Card.Body>
          <Container>
          <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facilis, saepe reprehenderit 
            corporis quod voluptas nulla praesentium officiis optio, quam sed quia nesciunt eveniet assumenda ea 
            quo aperiam? Assumenda, veritatis.
          </Card.Text>
          </Container>
        </Card.Body>
        <Card.Footer>
          <Button>Click</Button>
        </Card.Footer>
      </Card>
    </Container>
    <Footer />
    </>
  )
}

export default App