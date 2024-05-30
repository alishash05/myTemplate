import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header/Header.js';
import FirstPage from './FirstPage.js';
import About from './component/About.js';
import Services from './component/Services.js';
import Contact from './component/Contact.js';
import Footer from './Footer.js';

function App() {
  return (
<>
    <Router>
		<Header />
      <Routes>
        <Route exact path="/" element={<FirstPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
	  <Footer />
    </Router>
</>	
  );
}

export default App