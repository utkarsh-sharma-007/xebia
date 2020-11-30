import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { recievedLogin, resetUser } from "../redux/Actions/userActions";
import { updateCart, resetCart } from "../redux/Actions/cartActions";
import { searchProducts } from "../redux/Actions/productActions";
import { useHistory } from "react-router-dom";

let user = (state) => state.user;
let cart = (state) => state.cart;

function ProductsHeader() {
  const [search, setSearch] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  let loggedInUser = useSelector(user);
  let cartToCheck = useSelector(cart);
  React.useEffect(async () => {
    let currentUser = JSON.parse(localStorage.getItem("user")),
      curentCart = JSON.parse(localStorage.getItem("cart"));
    if (!currentUser || !currentUser.username) history.push("/");
    else dispatch(recievedLogin(currentUser));
    if (curentCart) dispatch(updateCart(curentCart));
    else console.log("byeb ye");
  }, []);

  return (
    <div className="header container products">
      <div className="logo">sCart</div>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            dispatch(searchProducts(search));
          }
        }}
      />
      <div style={{ textAlign: "left" }}>
        <div>
          <i className="fa fa-user" /> Welcome {loggedInUser.fullName},{" "}
          <a
            style={{ cursor: "pointer" }}
            onClick={() => {
              localStorage.removeItem("user");
              localStorage.removeItem("cart");
              dispatch(resetUser());
              dispatch(resetCart());
              history.push("/");
            }}
          >
            Logout
          </a>
          ?
        </div>
        <div
          title={
            cartToCheck.products.length
              ? cartToCheck.products.reduce((a, b) =>
                  typeof a == "object"
                    ? a.title +
                      " X " +
                      a.quantity +
                      "\n" +
                      b.title +
                      " X " +
                      b.quantity +
                      "\n"
                    : a + b.title + " X " + b.quantity + "\n"
                )
              : "No items in the cart"
          }
        >
          <i className="fa fa-cart-arrow-down" />{" "}
          {cartToCheck.products.length
            ? cartToCheck.products.map(v=>v.quantity).reduce((a,b)=>a+b)
            : cartToCheck.products.length}{" "}
          items
        </div>
      </div>
    </div>
  );
}

export default ProductsHeader;
