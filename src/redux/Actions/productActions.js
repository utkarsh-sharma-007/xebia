import axios from 'axios';
// import { toast } from 'react-toastify';
import {loaderHide,loaderShow} from '../../Helper/Helper'

//Action Types
export const REQUEST_PRODUCTS = "REQUEST_PRODUCTS";
export const RECEIVED_PRODUCTS = "RECEIVED_PRODUCTS";


//Action Creator

export const requestProducts = () => ({
   type: REQUEST_PRODUCTS,
});

export const recievedProducts = data => ({
   type: RECEIVED_PRODUCTS,
   products: data,
});

export function fetchProducts() {
   return (dispatch) => {
      dispatch(requestProducts())
      loaderShow()
     return axios.get(`https://xebiascart.herokuapp.com/products`)
      .then((data) => {
               dispatch(recievedProducts(data.data));
               loaderHide()
               return data.data
          },
      )
      .catch((err)=>{
          console.log(err);
      });
   };
  }