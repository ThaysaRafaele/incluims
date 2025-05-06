import React, { useState } from 'react';
import { Row, Col, InputGroup, Form, Button, Offcanvas } from 'react-bootstrap';
import { 
  Search, 
  FunnelFill, 
  X, 
  GeoAlt,
  Building,
  Star,
  StarFill,
  XCircleFill
} from 'react-bootstrap-icons';
import './MapPage.scss';

const mockPlaces = [
  {
    id: 1,
    name: 'Estabelecimento 1',
    category: 'Restaurante',
    rating: 4.5,
    coordinates: { lat: -20.4613, lng: -54.6047 },
    address: 'Av. Afonso Pena, 1234, Campo Grande - MS'
  },
  {
    id: 2,
    name: 'Estabelecimento 2',
    category: 'Shopping',
    rating: 4.0,
    coordinates: { lat: -20.4684, lng: -54.6110 },
    address: 'Rua 14 de Julho, 456, Campo Grande - MS'
  },
  {
    id: 3,
    name: 'Estabelecimento 3',
    category: 'Serviço',
    rating: 3.8,
    coordinates: { lat: -20.4550, lng: -54.5900 },
    address: 'Rua Bahia, 789, Campo Grande - MS'
  }
];

const categories = ['Restaurante', 'Shopping', 'Serviço', 'Lazer', 'Educação', 'Saúde', 'Comércio', 'Transporte'];

const accessibilityFeatures = [
  { id: 'wheelchair', name: 'Cadeirante' },
  { id: 'parking', name: 'Estacionamento acessível' },
  { id: 'bathroom', name: 'Banheiro adaptado' },
  { id: 'braille', name: 'Informações em Braille' },
  { id: 'signLanguage', name: 'Atendimento em Libras' },
  { id: 'tactilePaving', name: 'Piso tátil' },
  { id: 'audioDescription', name: 'Audiodescrição' },
  { id: 'hearingLoop', name: 'Loop auditivo' }
];

const MapPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedAccessibility, setSelectedAccessibility] = useState([]);
  const [minRating, setMinRating] = useState(0);

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleToggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleAccessibilityChange = (feature) => {
    if (selectedAccessibility.includes(feature)) {
      setSelectedAccessibility(selectedAccessibility.filter(f => f !== feature));
    } else {
      setSelectedAccessibility([...selectedAccessibility, feature]);
    }
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<StarFill key={i} className="star filled" />);
      } else {
        stars.push(<Star key={i} className="star empty" />);
      }
    }
    return stars;
  };

  return (
    <div className="map-page">
      <div className="search-container">
        <Row className="search-row">
          <Col xs="auto" className="back-btn-col">
            <Button
              variant="link"
              className="back-button"
              onClick={() => window.history.back()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
              </svg>
            </Button>
          </Col>
          <Col className="search-input-col">
            <InputGroup className="rounded-pill-group">
              <InputGroup.Text className="search-icon rounded-start-pill">
                <Search />
              </InputGroup.Text>
              <Form.Control
                placeholder="Pesquisar!"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <Button 
                  variant="link" 
                  className="clear-button rounded-end-pill"
                  onClick={handleClearSearch}
                >
                  <X />
                </Button>
              )}
            </InputGroup>
          </Col>
          <Col xs="auto" className="filter-btn-col">
            <Button 
              variant="link" 
              className="filter-button"
              onClick={handleToggleFilters}
            >
              <FunnelFill />
            </Button>
          </Col>
        </Row>
      </div>

      <div className="map-container">
        <div className="map-placeholder">
          <div className="map-overlay">
            {mockPlaces.map((place) => (
              <div 
                key={place.id} 
                className="map-marker"
                style={{ 
                  left: `${Math.random() * 80 + 10}%`, 
                  top: `${Math.random() * 70 + 10}%` 
                }}
              >
                <GeoAlt />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Offcanvas 
        show={showFilters} 
        onHide={() => setShowFilters(false)}
        placement="bottom"
        className="filters-panel"
      >
        <Offcanvas.Header>
          <Offcanvas.Title>Filtros</Offcanvas.Title>
          <Button 
            variant="link" 
            className="close-filters-button"
            onClick={() => setShowFilters(false)}
          >
            <XCircleFill />
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row className="filters-content">
            <Col md={4} className="filter-column">
              <div className="filter-section">
                <h6>Categorias</h6>
                <div className="filter-options">
                  {categories.map((category) => (
                    <Form.Check 
                      key={category}
                      type="checkbox"
                      id={`category-${category}`}
                      label={category}
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="filter-option"
                    />
                  ))}
                </div>
              </div>
            </Col>
            
            <Col md={4} className="filter-column">
              <div className="filter-section">
                <h6>Recursos de Acessibilidade</h6>
                <div className="filter-options">
                  {accessibilityFeatures.map((feature) => (
                    <Form.Check 
                      key={feature.id}
                      type="checkbox"
                      id={`feature-${feature.id}`}
                      label={feature.name}
                      checked={selectedAccessibility.includes(feature.id)}
                      onChange={() => handleAccessibilityChange(feature.id)}
                      className="filter-option"
                    />
                  ))}
                </div>
              </div>
            </Col>
            
            <Col md={4} className="filter-column">
              <div className="filter-section">
                <h6>Avaliação Mínima</h6>
                <div className="rating-filter">
                  <div className="rating-stars">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <span 
                        key={rating}
                        onClick={() => setMinRating(rating)}
                        className={`rating-star ${minRating >= rating ? 'active' : ''}`}
                      >
                        {minRating >= rating ? <StarFill /> : <Star />}
                      </span>
                    ))}
                  </div>
                  <span className="rating-text">
                    {minRating > 0 ? `${minRating} estrelas ou mais` : 'Todas as avaliações'}
                  </span>
                </div>
              </div>
              
              <div className="filter-actions">
                <Button 
                  variant="outline-secondary" 
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedAccessibility([]);
                    setMinRating(0);
                  }}
                  className="me-2"
                >
                  Limpar Filtros
                </Button>
                <Button 
                  variant="primary" 
                  onClick={() => setShowFilters(false)}
                >
                  Aplicar
                </Button>
              </div>
            </Col>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>

      <div className="places-peek">
        <div className="peek-header">
          <h6>Estabelecimentos</h6>
          <span className="places-count">{mockPlaces.length} encontrados</span>
        </div>
        <div className="places-list">
          {mockPlaces.map((place) => (
            <div key={place.id} className="place-item">
              <div className="place-icon">
                <Building />
              </div>
              <div className="place-info">
                <h6>{place.name}</h6>
                <div className="place-details">
                  <span className="place-category">{place.category}</span>
                  <div className="place-rating">
                    {renderRatingStars(Math.floor(place.rating))}
                    <span className="rating-value">{place.rating.toFixed(1)}</span>
                  </div>
                </div>
                <p className="place-address">{place.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapPage;