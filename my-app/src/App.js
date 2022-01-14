import React, { useState } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';
import ContactForm from './components/Contact';

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header></Header>
      <Nav>
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      </Nav>
      <main>
        <div>
          {!contactSelected ? (
            <>
              <Projects></Projects>
              <About></About>
            </>) :
            (<ContactForm></ContactForm>)
          }
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
