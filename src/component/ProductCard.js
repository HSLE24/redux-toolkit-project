import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
    const navigate = useNavigate();

    const showDetail=()=>{
        navigate(`/product/${item.id}`);
    };

  return (
    <div className="prod-card" onClick={showDetail}>
        <img alt="상품이미지" src={item?.img}></img>
        <div className="choice">{item?.choice === true?"Conscious choice":""}</div>
        <div>{item?.title}</div>
        <div>￦ {item?.price}</div>
        <div className="new-product">{item?.new === true?"신제품":""}</div>
    </div>
  )
}

export default ProductCard