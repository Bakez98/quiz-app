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
    // <div className={styles.wrapper}>
    //   <h2>Please Enter Your Email</h2>
    //   <input onChange={(event) => setEmail(event.target.value)} type="email" placeholder='Enter your email'></input>
    //   <button className={styles.loginBtn} disabled={loading} onClick={HandleLogin}>{loading ?"Loading" : "Login"}</button>

    // </div>
    <div class="container"> 
    <div class="row"> 
        <div class="col-md-6"> 
            <div class="card"> 
                <form onsubmit="event.preventDefault()" class="box"> 
                    <h1>Login</h1> 
                    <p class="text-muted"> Please enter your Email!</p>
                    <input type='email' onChange={(event) => setEmail(event.target.value)} className='myInput'placeholder="Username"/>  
                    <button className='myBtn' disabled={loading} onClick={HandleLogin}>{loading ?"Loading" : "Login"}</button>
                    
                </form> 
            </div> 
        </div> 
    </div>
</div>
  )
}

export default Login