import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {fetchLogin, recievedLogin} from '../redux/Actions/userActions';
import { useHistory } from "react-router-dom";

function Login() {

  const history = useHistory();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e,f) => f(e.target.value);

  React.useEffect(async ()=>{
    let currentUser = JSON.parse(localStorage.getItem('user'));
    if(currentUser && currentUser.username)
        history.push('/products')
},[])

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(name,password)
        let user = {
            name: name, password: password
        }
        let logUser = await dispatch(fetchLogin(user))
        console.log(logUser,'loginUser')
        localStorage.setItem('user',JSON.stringify(logUser))
        if(logUser.username){
            history.push('/products')
        }

    }
  return (
      <>
        <header>
        <div className="header container">
        <div className="logo">sCart</div>
        </div>
    </header>
        <div className="container">
            <form className="login-form" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="User Name"
                        autoFocus={true}
                        value={name}
                        onChange={(e)=>handleChange(e,setName)}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        autoFocus={true}
                        value={password}
                        onChange={(e)=>handleChange(e,setPassword)}
                    />
                </div>
                <button classname="login-button" disabled={!name.length || !password.length}>Submit</button>
            </form>
        </div>
       </>
  );
}

export default Login;
