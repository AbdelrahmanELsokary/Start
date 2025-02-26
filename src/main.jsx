import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Header } from './components/layout/Header.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
// import { Hero } from './components/pages/home/Hero.jsx';
// import { Partners } from './components/pages/home/prand.jsx';
// import { About } from './components/pages/home/About_Our.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { Portfolio } from './components/pages/Portfolio.jsx';
import { Services } from './components/pages/services/Services.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      {/* <Hero />
      <Partners />
      <About /> */}
      <Routes>
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/App" element={<App />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
