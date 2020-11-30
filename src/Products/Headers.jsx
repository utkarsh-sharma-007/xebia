import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { recievedLogin } from '../redux/Actions/userActions';
import { useHistory } from "react-router-dom";

let user = (state) => state.user

function ProductsHeader() {
    const history = useHistory();
    const dispatch = useDispatch();
    let loggedInUser = useSelector(user);
    React.useEffect(async ()=>{
        let currentUser =  JSON.parse(localStorage.getItem('user'));
        if(!currentUser || !currentUser.username)
            history.push('/')
        else
            dispatch(recievedLogin(currentUser))
    },[])
  return (
    <div className="header container products">
        <div className="logo">sCart</div>
        <input type="text"/>
        <div style={{textAlign: "left"}}>
            <div><i className="fa fa-user"/> Welcome {loggedInUser.fullName}</div>
            <div><i className="fa fa-cart-arrow-down"/> 0 items</div>
        </div>
    </div>
  );
}

export default ProductsHeader;
