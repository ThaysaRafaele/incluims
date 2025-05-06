import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MapPage from './pages/MapPage';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />

        <Route path="/map" element={
          <Layout>
            <MapPage />
          </Layout>
        } />
        
        <Route path="/about" element={
          <Layout>
            <div>Sobre o INCLUIMS (Em construção)</div>
          </Layout>
        } />
        <Route path="/add-place" element={
          <Layout>
            <div>Adicionar Local (Em construção)</div>
          </Layout>
        } />
        <Route path="/login" element={
          <Layout>
            <div>Login (Em construção)</div>
          </Layout>
        } />
        <Route path="/register" element={
          <Layout>
            <div>Cadastro (Em construção)</div>
          </Layout>
        } />
        <Route path="*" element={
          <Layout>
            <div>Página não encontrada</div>
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;