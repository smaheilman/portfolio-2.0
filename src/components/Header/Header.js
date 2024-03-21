import React, { useState } from "react";
import { Nav } from "../Nav/index";

function Header() {
  // The renderPage method uses a switch statement to render the appropriate current page

  return (
    <header className="d-flex">
      <h1 className="sam">Sam</h1>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
    </header>
  );
}

export default Header;
