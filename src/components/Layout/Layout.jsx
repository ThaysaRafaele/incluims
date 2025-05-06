import React from 'react';
import Header from '../common/Header';
// import Footer from '../common/Footer';
import { useLocation } from 'react-router-dom';
import './Layout.scss';

const Layout = ({ children }) => {
  const location = useLocation();
  
  const isMapPage = location.pathname === '/map';
  
  return (
    <div className={`app-layout ${isMapPage ? 'map-page-layout' : ''}`}>
      <Header />
      <main className="main-content">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;