import React from 'react';
//import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        contactSelected,
        setContactSelected
    } = props;

    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                        About Me</a>
                </li>
                <li>
                    <a data-testid="projects" href="#projects" onClick={() => setContactSelected(false)}>
                        Projects
                    </a>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <span onClick={() => setContactSelected(true)}>Contact</span>

                </li>
            </ul>
        </nav>
    );

}

export default Nav;