import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col }  from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
 
  const productList = useSelector(state=>state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts= ()=>{

    let searchQuery = query.get('q') || "";
    console.log("쿼리 ", searchQuery);
    dispatch(productAction.getProducts(searchQuery));
  }

  useEffect(()=>{
    getProducts();
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