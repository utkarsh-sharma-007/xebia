import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchLogin} from '../redux/Actions/userActions';

const user = (state) => state.user;

function Login() {
  const loginUser = useSelector(user);
  // console.log(loginUser)
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e,f) => f(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(name,password)
        let user = {
            name: name, password: password
        }
        await dispatch(fetchLogin(user))
        if(loginUser.name){
            console.log('hello')
        }

    }
  return (
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
            <button disabled={!name.length || !password.length}>Submit</button>
        </form>
    </div>
  );
}

export default Login;
