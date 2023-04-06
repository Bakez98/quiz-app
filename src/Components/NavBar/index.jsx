import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SlUser, SlLogout } from 'react-icons/sl';
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { logout } from '../../Redux/authReducer/actions';
import styles from "./styles.modules.css";
import Spinner from "../spinner"

const NavBar = () => {

  const [toggleBoxLogout, setToggleBoxLogout] = useState(false);
  const { isAuth, user ,loading} = useSelector(state =>  state.authReducer);
  const dispatch = useDispatch();
  const nav = useNavigate();


  function handleLogout() {
    dispatch(logout()).then((res) => {
      if (res) {
        nav("/");
      }
    });
  }

  if(loading) return <div><Spinner/></div>
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Quiz-Simulator</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav>
      {isAuth &&
        <SlLogout
        className={styles.LogOutBtn}
        onClick={handleLogout}
        color='white'
        />
      }

    </Container>
  </Navbar>
  )
}

export default NavBar