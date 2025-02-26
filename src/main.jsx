import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx';
import { Header } from './components/layout/Header.jsx';
import { BrowserRouter, Routes } from 'react-router';
import { Hero } from './components/pages/home/Hero.jsx';
import { Partners } from './components/pages/home/prand.jsx';
import { About } from './components/pages/home/About_Our.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Header />
      <Hero />
      <Partners />
      <About />
      <Routes></Routes>
    </BrowserRouter>
  </StrictMode>
);
