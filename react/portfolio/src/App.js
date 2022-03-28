import React from 'react';
import './App.css';
import { 
  About, 
  Contact, 
  Footer, 
  Header, 
  Nav, 
  Experience ,
  Portfolio,
  Services,
  Testimonials
} from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
