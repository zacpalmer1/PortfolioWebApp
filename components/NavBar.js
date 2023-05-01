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
      
      <Navbar fluid expand="lg" className="bg-zinc-700 bg-opacity-90 backdrop-filter backdrop-blur-md flex flex-col fixed w-full z-10">
        <div className="w-screen h-8 top-0 bg-zinc-800 text-zinc-300 text-xs absolute "> 
        <div className="mt-2 pl-28">
        <p>Software Engineer &nbsp; &nbsp;| &nbsp; &nbsp;Portfolio</p>
        </div>
        </div>
        <div className="container mx-auto flex justify-between mt-8">
        <Navbar.Brand
          className="flex flex-row items-center justify-center lang-de"
          href="/"
          style={{ paddingLeft: "80px", paddingRight: "80px" }}
        >
          <Nav.Link
              
              className="text-zinc-300 hover:text-stone-100 duration-500 text-m font-bold text-md"
              href="/n"
            >
              Palmer
            </Nav.Link>
        </Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end text-white " style={{ paddingRight: "80px", width: '100%' }}>
              
              <Nav.Link
                className="text-zinc-300 hover:text-stone-100  duration-500 text-m font-bold text-xs"
                href="/"
              >
                Home
              </Nav.Link>
              <Nav.Link
              
                className="text-zinc-300 hover:text-stone-100 duration-500 text-m font-bold text-xs"
                href="https://www.linkedin.com/in/zac-palmer-b8482b1b7"
              >
                LinkedIn 
              </Nav.Link>

              <Nav.Link
              
              className="text-zinc-300 hover:text-stone-100 duration-500 text-brand-text-m font-bold text-xs"
              href="https://github.com/zacpalmer1"
            >
              Github  
            </Nav.Link>
            <Nav.Link
              
              className="text-zinc-300 hover:text-stone-100 duration-500 text-brand-text-m font-bold text-xs"
              href="/profile"
            >
              Contact  
            </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
        </div>
      </Navbar>
    );
  }

  return <></>;
};

export default NavBar;
