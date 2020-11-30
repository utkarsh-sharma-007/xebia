import axios from 'axios';
import { toast } from 'react-toastify';
import {loaderHide,loaderShow} from '../../Helper/Helper'

//Action Types
export const CHANGE_USER = "CHANGE_USER";
export const RESET_USER = "RESET_USER";

export const UPDATE_CART = "UPDATE_CART";
export const RESET_CART = "RESET_CART";


//Action Creator
export const resetCart = () => ({
   type: RESET_CART,
});

export const updateCart = data => ({
   type: UPDATE_CART,
   cart: data,
});