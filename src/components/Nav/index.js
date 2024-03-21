import React, { useState } from "react";
import { ReactComponent as MenuIcon } from "../../assets/icons/mobile-menu-icon.svg";
//import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const tabs = ["Homepage", "About", "Projects", "Contact"];
  function onClick() {
    setMobileNavOpen(true);
  }
  return (
    <header className="Header-Container">
      <p className="Heading">Sam</p>
      <nav className="Nav-Container">
        {/* <div className="Mobile-Nav">
          <button className="Mobile-Nav-Btn" onClick={onClick}>
            <MenuIcon />
          </button>
        </div> */}
        <div className="Nav-Wrapper">
          <ul className="Nav-Inner-Wrapper">
            {tabs.map((tab) => (
              <li className="Nav-Item" key={tab}>
                <a
                  href={"#" + tab.toLowerCase()}
                  // Whenever a tab is clicked on,
                  // the current page is set through the handlePageChange props.
                  onClick={() => props.handlePageChange(tab)}
                  className={
                    props.currentPage === tab ? "Nav-Link active" : "Nav-Link"
                  }
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
