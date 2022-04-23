import React , {useState,useEffect} from 'react'
import axios from 'axios'

import {Container,Row,Col,Card,Button} from 'react-bootstrap'

const Product = (props) => {
  const [product , setProduct] = useState(null)
  console.log(props)
  const findProductHandler = async () => {
    const id = window.location.hash.split('#')[1]

    const products = await axios.get('./products.json')
    
    const product = products.data.items.find(item => item._id === id)
    
    return product
  }

 
  useEffect( ()=> {
    findProductHandler().then(res => setProduct(res) )
  },[])

  let findproduct = null

  if(product !== null){
    findproduct = (
      <Card >
      <Row className='align-items-center text-center'>
        <Col md={8}>
          <Card.Img src={`${product.image}`} />
        </Col>
        <Col md={4}>
          <Card.Body>
            <Card.Title>
              {product.name}
            </Card.Title>
            <Card.Text>
              {product.description}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
    )
  }
  
  return (
    <Container as='main'>
        <Row>
          {findproduct}
        </Row>
    </Container>
  )
}

export default Product