import React from 'react'
import { useState, useEffect } from 'react'
import './style.css';
import { login } from '../../Redux/authReducer/actions';
import { useDispatch , useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
import Spinner from '../../Components/spinner';


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

if(loading) return <div className='mySpinner'><Spinner/></div>



  return (

    <div class="loginContainer"> 
                  <div class="box"> 
                    <h1>Login</h1> 
                    <p class="text-muted"> Please enter your Email!</p>
                    <input type='email' onChange={(event) => setEmail(event.target.value)} className='myInput'placeholder="Email"/>  
                    <button className='myBtn' disabled={loading} onClick={HandleLogin}>{loading ?"Loading" : "Login"}</button>
                    
                </div> 
</div>
  )
}

export default Login