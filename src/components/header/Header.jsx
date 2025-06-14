import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/logo2.png";
import "../header/Header.css"

const Header = () => {
  return (
    <>
      <Navbar bg="success" data-bs-theme="success" className='p-0' collapseOnSelect expand="sm">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className='Logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
            <Nav className="ml-auto">
              <Nav.Link href="/" className='p-3 custom-nav-link'>Home</Nav.Link>
              <Nav.Link href="#events" className='p-3 custom-nav-link'>Events</Nav.Link>
              <Nav.Link href="#contact" className='p-3 custom-nav-link'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header

