import './App.css';
import { Hero } from './components/pages/home/Hero.jsx';
import { Partners } from './components/pages/home/prand.jsx';
import { About } from './components/pages/home/About_Our.jsx';
import { Team } from './components/pages/home/Team.jsx';
function App() {
  return (
    <>
      <Hero />
      <Partners />
      <About />
      <Team />
    </>
  );
}

export default App;
