import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col }  from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
 
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProduct= async()=>{

    let searchQuery = query.get('q') || "";
    console.log("쿼리 ", searchQuery);
    try{
      let url = `https://my-json-server.typicode.com/HSLE24/hnm-test/products?q=${searchQuery}`;
      let response = await fetch(url);
      let data = await response.json();
      
      setProductList(data);
    }
    catch{
      console.log("불러오기 실패")
    }
  }

  useEffect(()=>{
    getProduct();
  }, [query])

  return (
    <div>
      <Container>
        <Row>
          { productList && productList.map((item, index)=>(
            <Col key={ index } md={3} sm={12}>
              <ProductCard item={ item }/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll