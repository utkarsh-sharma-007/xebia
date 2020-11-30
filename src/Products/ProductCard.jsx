import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { recievedLogin } from '../redux/Actions/userActions';
// import { fetchProducts } from '../redux/Actions/productActions';
import { fetchProductsFilter } from "../redux/Actions/productFilterActions";
import { updateCart } from "../redux/Actions/cartActions";
import { useHistory } from "react-router-dom";
// import Headers from './Headers'

let filters = (state) => state.products;

function ProductCard(props) {
  const history = useHistory();
  const filterToUse = useSelector(filters);
  const dispatch = useDispatch();
  React.useEffect(async () => {
    // await dispatch(fetchProductsFilter())
    // console.log(props.product);
    // updateCart()
  }, []);

  const updateTheCart = (p)=>{
      let cart = JSON.parse(localStorage.getItem('cart'));
      if(p){
          if(cart){
              let index = cart.findIndex(v=>v.id === p.id)
              if(index>-1){
                cart[index].quantity += 1;
              }
              else{
                  cart.push({...p, quantity: 1})
              }
          }
          else{
            cart = [{...p, quantity: 1}];
          }
          console.log('coming here ')
          localStorage.setItem('cart',JSON.stringify(cart))
      }
      dispatch(updateCart(cart))
  }
  return (
    <div className="product-outer-container">
      <div className="product-inner-container">
        <div className="image-container">
          {props.product.discount>0 &&<div className="discount">{props.product.discount} %</div>}
          <img src={props.product.image} />
        </div>
        <div className="product-info">
          <div className="product-title" title={props.product.title}>
            {props.product.title.length > 20
              ? props.product.title.substring(0, 20) + "..."
              : props.product.title}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            Color:{" "}
            <div
              style={{ background: props.product.colour.color }}
              className="color-code"
            ></div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            Brand: <div>{props.product.brand}</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            Price:{" "}
            <div>
                <span style={{color: "grey", textDecoration: "line-through"}}>{props.product.price.mrp? '₹'+new Intl.NumberFormat('en-IN').format(
                props.product.price.mrp / 100
              ):''}</span>
              &nbsp;<span style={{color: "green"}}>₹
              {new Intl.NumberFormat('en-IN').format(
                props.product.price.final_price / 100
              )}</span>
            </div>
          </div>
          <button onClick={()=>{updateTheCart(props.product)}}>Add To Cart</button>
        </div>
        {/* {JSON.stringify(props.product)} */}
      </div>
    </div>
  );
}

export default ProductCard;
