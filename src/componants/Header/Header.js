import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../../CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.css'
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
    return (
        <div>
             <nav>
             <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand className='logo-style text-danger' href="#home">
   Players bundle
    </Navbar.Brand>
    <Nav className="ms-auto menu">
      <CustomLink to='/'>Home</CustomLink>
      <CustomLink to='/players'>Players</CustomLink>
      <CustomLink to='/login'>Login</CustomLink>
      {
        user ? <button onClick={logout}>Logout</button>
        :
        <CustomLink to='/register'>Register</CustomLink>
      }
      
     
    </Nav>
    </Container>
  </Navbar>
             </nav>
        </div>
    );
};

export default Header;