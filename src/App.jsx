import React from 'react';
import './App.css'
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about'
import Pricing from './components/pricing'
import Contact from './components/contact'
import Gallery from './components/gallery'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Pricing />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;