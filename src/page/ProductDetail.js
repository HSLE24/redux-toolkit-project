import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetail = () => {

    let {id} = useParams();

    const prodDetail = useSelector(state=>state.product.prodDetail);
    
    const dispatch = useDispatch();
    const getProductDetail= async ()=>{
        dispatch(productAction.getProductDetail(id));
    }

    useEffect(()=>{
        getProductDetail();
    }, [])

  return (
    <div>
        <Container>
            <Row>
                <Col className="product-img">
                    <img src={ prodDetail?.img }></img>
                </Col>
                <Col>
                    <div>
                        <div>{ prodDetail?.title }</div>
                        <div>￦ { prodDetail?.price }</div>
                        <div className="choice">{prodDetail?.choice === true?"Conscious choice":""}</div>
                    </div>
                    <Form>
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            {
                                prodDetail.size && prodDetail.size.map((item, index)=>(
                                    <option key={index} value={ index }>{ item }</option>
                                ))
                            }
                        </Form.Select>
                        <Button className="prod-btn" variant="dark" type="submit">
                            추가
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ProductDetail