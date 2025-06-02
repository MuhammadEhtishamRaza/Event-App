import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from "../../assets/image.png";
import "../header/Header.css"

const Header = () => {
  return (
    <>
      <Navbar bg="secondary" data-bs-theme="secondary" className='p-0'>
        <Container>
          <Navbar.Brand href="/">
            <img src={img} alt="Logo" className='Logo' />
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/" className='p-3 custom-nav-link'>Home</Nav.Link>
            <Nav.Link href="#features" className='p-3 custom-nav-link'>Events</Nav.Link>
            <Nav.Link href="#pricing" className='p-3 custom-nav-link'>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header

