import AboutMe from './components/pages/aboutme'; 
import Contact from './components/pages/contactme';
import Portfolio from './components/pages/portfolio';
import Resume from './components/pages/resume';
import Navigation from './components/navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
