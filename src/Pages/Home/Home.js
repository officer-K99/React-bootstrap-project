import React ,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { ProductListAction } from '../../Store/Redusers/Products/productsAction'

import {Container,Row,Col,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = (props) => {
  
   const dispatch = useDispatch()
   const productList = useSelector( state => state.productList )

   const {loading , products} = productList

   
   useEffect(()=> {

        dispatch(ProductListAction())

   },[dispatch])



   let list = null

   if(products !== []){
    list = products.map((item,index) => {
        return (
            <Col key={index} className='mb-3' md={4} sm={6} lg={3}>
                 <Card className='text-center'>
                     <Link to={`/product:${item._id}`}><Card.Img variant='top' src={`${item.image}`} /></Link>
                     <Card.Body>
                         <Card.Title>{item.name}</Card.Title>
                         <Card.Text>{item.description}</Card.Text>
                     </Card.Body>
                 </Card>
            </Col>
        )
    })
}

   let load = <h2>...در حال دریافت محصولات</h2>

   if(!loading){
    load = <h2>محصولات</h2>
   }


  return (
    <Container as='main'>
        <Row style={{marginBottom : '1rem'}} className='text-center'>{load}</Row>
        <Row>
            {list}
        </Row>
    </Container>
  )
}



export default Home