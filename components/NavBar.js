/* eslint-disable @next/next/no-img-element */
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import loop from '../styles/images/logoInterloop.svg';
import { useSession, signIn, signOut } from 'next-auth/react';

const NavBar = () => {
  const { data: session, status } = useSession();
  if (status === 'authenticated') {
    return (
      <Navbar fluid expand="lg" className="bg-stone-900 ">
        <Navbar.Brand
          className="flex flex-row items-center justify-center lang-de"
          href="/"
          style={{ paddingLeft: "50px", paddingRight: "60px" }}
        >
          <Nav.Link
              
              className="text-stone-600 hover:text-red-400 text-m font-bold text-md"
              href="/dashboard"
            >
              ZP 
            </Nav.Link>
        </Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end text-white" style={{ paddingRight: "30px", width: '100%' }}>
              
              <Nav.Link
                className="text-stone-600 hover:text-blue-400 text-m font-bold text-xs"
                href="/"
              >
                Home
              </Nav.Link>
              <Nav.Link
              
                className="text-stone-600 hover:text-red-400 text-m font-bold text-xs"
                href="/dashboard"
              >
                Projects 
              </Nav.Link>

              <Nav.Link
              
              className="text-stone-600 hover:text-orange-400 text-brand-text-m font-bold text-xs"
              href="/profile"
            >
              About  
            </Nav.Link>
            <Nav.Link
              
              className="text-stone-600 hover:text-green-400 text-brand-text-m font-bold text-xs"
              href="/profile"
            >
              Contact  
            </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    );
  }

  return <></>;
};

export default NavBar;
