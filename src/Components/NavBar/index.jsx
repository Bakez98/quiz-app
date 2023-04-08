import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/authReducer/actions";



const NavBar = () => {
  const { isAuth } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const nav = useNavigate();

  function handleLogout() {
    dispatch(logout()).then((res) => {
      if (res) {
        nav("/");
      }
    });
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Quiz-Simulator</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        {isAuth && (
          <div>
          <BiLogOut onClick={handleLogout} color="white" size={30}/>
        </div>        
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
