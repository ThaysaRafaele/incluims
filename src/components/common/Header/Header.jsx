import React from 'react';
import { 
  Navbar, 
  Container,
  Nav,
} from 'react-bootstrap';
import { 
  PersonCircle,
} from 'react-bootstrap-icons';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const isMobile = window.innerWidth < 992;
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';
  
  return (
    <Navbar 
      fixed="top" 
      className="main-header"
    >
      <Container>
        {/* Versão Mobile */}
        {isMobile || isHomePage ? (
          <>
            <Navbar.Brand as={Link} to="/" className="mx-auto">
              <span className="brand-text">Inclui MS</span>
            </Navbar.Brand>
            
            <Link 
              to="/login"
              className="login-link ms-auto"
              aria-label="Entrar"
            >
              <PersonCircle className="login-icon" />
            </Link>
          </>
        ) : (
          <>
           {/* Versão Desktop*/}
            <Nav className="mx-auto desktop-nav">
              <Nav.Link as={Link} to="/map">
                <span>Mapa</span>
              </Nav.Link>
              
              <Nav.Link as={Link} to="/about">
                <span>Sobre</span>
              </Nav.Link>
              
              <Navbar.Brand as={Link} to="/" className="mx-4">
                <span className="brand-text">Inclui MS</span>
              </Navbar.Brand>
              
              <Nav.Link as={Link} to="/add-place">
                <span>Adicionar Local</span>
              </Nav.Link>
              
              <Nav.Link as={Link} to="/login">
                <span>Entrar</span>
              </Nav.Link>
            </Nav>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;