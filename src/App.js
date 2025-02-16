import './App.css';
import { useState } from 'react';
import Layout from './components/layout.js';
import Contacts from './components/contacts';
import About from './components/about';
import Projects from './components/projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [activePage, setActivePage] = useState('about'); 
  const [activeSubPage, setActiveSubPage] = useState('about-me');
  const [activeProject, setActiveProject] = useState('');

  return (
    <Router>
      <Layout 
        activePage={activePage} 
        setActivePage={setActivePage} 
        activeSubPage={activeSubPage}
        setActiveSubPage={setActiveSubPage}
      />
      <Routes>
        <Route path="/" element={<About setActivePage={setActivePage} activeSubPage={activeSubPage} setActiveSubPage={setActiveSubPage} />} />
        <Route path="/projects" element={<Projects setActivePage={setActivePage} />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
