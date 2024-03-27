import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col }  from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/slice/productSlice'

const ProductAll = () => {
 
  const productList = useSelector(state=>state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getAllProducts= ()=>{

    let searchQuery = query.get('q') || "";
    console.log("쿼리 ", searchQuery);
    //dispatch(productAction.getProducts(searchQuery));
    dispatch(getProducts(searchQuery));
  }

  useEffect(()=>{
    getAllProducts();
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