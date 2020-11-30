import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { recievedLogin } from '../redux/Actions/userActions';
import { fetchProducts } from '../redux/Actions/productActions';
// import { fetchProductsFilter } from '../redux/Actions/productFilterActions';
import { useHistory } from "react-router-dom";
import Headers from './Headers';
import Filters from './Filters';

let user = (state) => state.user

function Products() {
    const history = useHistory();
    const dispatch = useDispatch();
    React.useEffect(async ()=>{
        await dispatch(fetchProducts())
        // await dispatch(fetchProductsFilter())
    },[])
  return (
      <>
        {/* <div className="header container products">
            <div className="logo">sCart</div>
            <input type="text"/>
            <div style={{textAlign: "left"}}>
                <div><i className="fa fa-user"/> Welcome {loggedInUser.fullName}</div>
                <div><i className="fa fa-cart-arrow-down"/> 0 items</div>
            </div>
        </div> */}
        <Headers/>
        <hr/>
        <div className="body container">
            <div style={{display: "flex"}}>
                <div style={{width: "25%", textAlign: "left"}}>
                    <Filters/>
                </div>
                <div>flex</div>
            </div>
        </div>
      </>
  );
}

export default Products;
