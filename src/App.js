import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import RestaurantProject from './pages/projects/RestaurantProject';
import EcommerceProject from './pages/projects/EcommerceProject';
import PhotographyProject from './pages/projects/PhotographyProject';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={
            <Layout>
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects/restaurant" element={<RestaurantProject />} />
                <Route path="/projects/ecommerce" element={<EcommerceProject />} />
                <Route path="/projects/photography" element={<PhotographyProject />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
