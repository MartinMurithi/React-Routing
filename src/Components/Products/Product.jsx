import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../../App'
import { useParams } from 'react-router-dom';

function Product() {
    let products = useContext(ProductsContext);
    let { productId } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
      //find the product from the params id
        const product = products.find(product => product.id === parseInt(productId, 10));
        console.log(product);
        setProduct(product);
    }, [productId])
    
    
  return (
      <>
          <div className="left">
              <img src={product.thumbnail} alt="" srcSet="" />
          </div>
          <h2> { product.title }</h2>
          <h2> { product.price }</h2>
      </>
  )
}

export default Product