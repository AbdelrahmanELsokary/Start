import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Header } from './components/layout/Header.jsx';
import { BrowserRouter, Routes } from 'react-router';
import { Hero } from './components/pages/Hero.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <BrowserRouter>
      <Header />
      <Hero />
      <Routes></Routes>
    </BrowserRouter>
  </StrictMode>
);
