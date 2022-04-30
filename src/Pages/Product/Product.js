import React , {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { ProductListAction } from '../../Store/Redusers/Products/productsAction'

import {Container,Row,Col,Card} from 'react-bootstrap'


const Product = () => {
  const dispatch = useDispatch()
  const productList = useSelector( state => state.productList )

  const {loading , products} = productList

  

  let {id} = useParams()

  id = id[1]

  useEffect(()=> {

    dispatch(ProductListAction())

  },[dispatch])



  let findproduct = products === [] ? null : products.find(item => item._id === id)
  

  if(findproduct !== undefined){
    findproduct = (
      <Card >
      <Row className='align-items-center text-center'>
        <Col md={8}>
          <Card.Img src={`${findproduct.image}`} />
        </Col>
        <Col md={4}>
          <Card.Body>
            <Card.Title>
              {findproduct.name}
            </Card.Title>
            <Card.Text>
              {findproduct.description}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
    )
  }else{
    findproduct = <h2>...در حال دریافت محصول</h2>
  }


  
  return (
    <Container as='main'>
        <Row className='text-center'>
          {findproduct}
        </Row>
    </Container>
  )
}

export default Product