import axios from 'axios';
import { toast } from 'react-toastify';
import {loaderHide,loaderShow} from '../../Helper/Helper'

//Action Types
export const REQUEST_PRODUCTS_FILTER = "REQUEST_PRODUCTS_FILTER";
export const RECEIVED_PRODUCTS_FILTER = "RECEIVED_PRODUCTS_FILTER";


//Action Creator

export const requestProductsFilter = () => ({
   type: REQUEST_PRODUCTS_FILTER,
});

export const recievedProductsFilter = data => ({
   type: RECEIVED_PRODUCTS_FILTER,
   filters: data,
});

export function fetchProductsFilter() {
   return (dispatch) => {
      dispatch(requestProductsFilter())
      loaderShow()
     return axios.get(`https://xebiascart.herokuapp.com/filters`)
      .then((data) => {
               dispatch(recievedProductsFilter(data.data));
               loaderHide()
               return data.data
          },
      )
      .catch((err)=>{
          console.log(err);
      });
   };
  }