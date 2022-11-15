import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { userData, login } from "../userSlice";
import { loginUser } from "../../../services/loginUser";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userReduxCredentials = useSelector(userData);


  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handler = (e) => {
    setUser((objUser) => ({
      ...objUser,
      [e.target.name]: e.target.value,
    }));
    console.log(user);
  };

  useEffect(() => {

    if (userReduxCredentials?.token !== '') {
      console.log(userReduxCredentials)
        navigate("/");
    };
}, []);

  const logMe = () => {
    loginUser(user).then((res) => {
      let jwt = res.data.jwt
      console.log(res.data.jwt);
      dispatch(login({token: jwt}));
      
      setTimeout(()=>{
        navigate("/");
    },1000);
    });
  };

  return (
    <div className="loginDesign">
      <div>
        <input
          type="text"
          name="email"
          placeholder="Escriba su email"
          onChange={(e) => handler(e)}
        />
        <input
          type="text"
          name="password"
          placeholder="Escriba su contraseña"
          onChange={(e) => handler(e)}
        />
      </div>
      <div onClick={() => logMe()}>Login</div>
    </div>
  );
};

export default Login;
