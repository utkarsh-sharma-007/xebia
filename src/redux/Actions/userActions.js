import axios from 'axios';
import { toast } from 'react-toastify';
import {loaderHide,loaderShow} from '../../Helper/Helper'

//Action Types
export const CHANGE_USER = "CHANGE_USER";
export const RESET_USER = "RESET_USER";

export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const RECEIVED_LOGIN = "RECEIVED_LOGIN";


//Action Creator
export const changeUser = (field,value) => ({
   type: CHANGE_USER,
   field: field,
   value: value
});

export const resetUser = () => ({
   type: RESET_USER
});

export const requestLogin = () => ({
   type: REQUEST_LOGIN,
});

export const recievedLogin = data => ({
   type: RECEIVED_LOGIN,
   user: data,
});

export function fetchLogin(user) {
   console.log(user)
   return (dispatch) => {
      dispatch(requestLogin())
      loaderShow()
     return axios.get(`https://xebiascart.herokuapp.com/users?username=${user.name}`)
      .then((data) => {
            let loggedInUser = {}
               if(data.data.length){
                  data.data.forEach(v=>{
                     if(v.username===user.name){
                        loggedInUser = v;
                     }
                  })
               }
               if(loggedInUser.id) {
                  if(loggedInUser.password===user.password){
                     toast.success("Logged In Successfully!!!")
                  }else{
                     loggedInUser = {}
                     toast.error("Wrong Password!!!");
                  }
               }
               else toast.error("No user with that username!!!");
               dispatch(recievedLogin(loggedInUser));
               loaderHide()
               return loggedInUser
          },
      )
      .catch((err)=>{
          console.log(err);
      });
   };
  }