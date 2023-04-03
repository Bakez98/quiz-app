import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Quiz-Simulator</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#">Home</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar