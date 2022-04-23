import React ,{useEffect , useState} from 'react'
import axios from 'axios'
import {Container,Row,Col,Card,Button} from 'react-bootstrap'

const Home = (props) => {
   const [products,setProducts] = useState(null)

   const getProducts = async () =>{
    const products = await axios.get('/products.json')
    const data = products.data.items

    return data
   }

   useEffect(()=> {
    getProducts()
        .then(res => {
            setProducts(res)
        })
   },[])

   let list = null

   if(products !== null){
       list = products.map(item => {
           return (
               <Col className='mb-3' md={4} sm={6} lg={3}>
                    <Card className='text-center'>
                        <Card.Link href='#'><Card.Img variant='top' src={`${item.image}`} /></Card.Link>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                        </Card.Body>
                    </Card>
               </Col>
           )
       })
   }


  return (
    <Container as='main'>
        <Row>
            {list}
        </Row>
    </Container>
  )
}

export default Home