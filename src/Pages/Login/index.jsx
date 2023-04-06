import React from 'react'
import { useState, useEffect } from 'react'
import styles from "./styles.module.css";
import { login } from '../../Redux/authReducer/actions';
import { useDispatch , useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";



const Login = () => {

const {loading , isAuth} = useSelector(state => state.authReducer);


const [email, setEmail] = useState()
const dispatch = useDispatch();
const navigate = useNavigate();


function HandleLogin() {
dispatch(login(email))
}

useEffect(() => {
  if(isAuth)
  {
    navigate("/Home")
  }


}, [isAuth])



  return (
    <div className={styles.wrapper}>
      <h2>Please Enter Your Email</h2>
      <input onChange={(event) => setEmail(event.target.value)} type="email" placeholder='Enter your email'></input>
      <button className={styles.loginBtn} disabled={loading} onClick={HandleLogin}>{loading ?"Loading" : "Login"}</button>

    </div>
  )
}

export default Login