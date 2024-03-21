import Footer from "./components/Footer";
import React, { useState } from "react";
import Nav from "./components/Nav/index";
import Projects from "./Pages/Projects/index";
import About from "./Pages/About/index";
import ContactForm from "./Pages/Contact/index";
import Homepage from "./Pages/Homepage/index";

const App = () => {
  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState("Home");

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <ContactForm />;
      default:
        return <Homepage />;
    }
  };

  return (
    <main>
      {/* Pass the state value and the setter as props to NavTabs */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
      <Footer></Footer>
    </main>
  );
};

export default App;
