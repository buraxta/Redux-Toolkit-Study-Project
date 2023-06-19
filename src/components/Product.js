import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Product = () => {
  const dispatch =useDispatch();
  const {data: products} = useSelector(state => state.products);


  useEffect(() => {
    //dispatch an action for fetchProducts
    dispatch(getProducts());
    
    
    //api
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => setProducts(result));
  }, []);

  const addToCart = product => {
    // dispatch an add action
    dispatch(add(product))
  }

  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card key={product.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: "white" }}>
          <Button variant="primary" onClick={() => addToCart(product)}>Add To Card</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
};

export default Product;
