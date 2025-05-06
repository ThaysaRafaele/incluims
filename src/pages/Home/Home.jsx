import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.scss';

import logoImage from '../../assets/images/IncluiMS_Logos/Inclui verde.png';

const Home = () => {
  return (
    <div className="home-page">
      <Container className="home-container">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} className="text-center">
            <div className="home-content">
              <div className="logo-container">
                <img 
                  src={logoImage} 
                  alt="Logo INCLUIMS - Plataforma de Acessibilidade" 
                  className="home-logo"
                />
              </div>
              
              <h1 className="home-title">INCLUIMS</h1>
              <p className="home-subtitle">
                Plataforma colaborativa de acessibilidade para Campo Grande
              </p>
              
              <div className="action-buttons">
                <Button 
                  as={Link} 
                  to="/map" 
                  variant="success" 
                  size="lg" 
                  className="home-button"
                >
                  Explorar Mapa
                </Button>
                
                <Button 
                  as={Link} 
                  to="/register" 
                  variant="outline-success" 
                  size="lg" 
                  className="home-button"
                >
                  Cadastrar
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;