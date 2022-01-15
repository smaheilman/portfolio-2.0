import React, {useState} from 'react';
import Nav from './Nav/index';
import Projects from './Projects/index';
import About from './About/index';
import ContactForm from './Contact/index';
import Homepage from './Homepage/index';

function Portfolio() {
    // Using useState, set the default value for currentPage to 'Home'
    const [currentPage, handlePageChange] = useState('Home');
  
    // The renderPage method uses a switch statement to render the appropriate current page
    const renderPage = () => {
      switch (currentPage) {
        case 'About':
          return <About />;
        case 'Projects':
          return <Projects />;
        case 'Contact':
          return <ContactForm />;
        default:
          return <Homepage />;
      }
    };
  
    return (
      <div>
        {/* Pass the state value and the setter as props to NavTabs */}
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Call the renderPage function passing in the currentPage */}
        <div>{renderPage(currentPage)}</div>
      </div>
    );
  }
  
  export default Portfolio;