import React from 'react';
//import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const tabs = ['Homepage', 'About', 'Projects', 'Contact'];
    return (
        <header>
            <h1>Samantha Heilman</h1>
            <ul className="nav nav-tabs">
                {tabs.map(tab => (
                    <li className="nav-item" key={tab}>
                        <a
                            href={'#' + tab.toLowerCase()}
                            // Whenever a tab is clicked on,
                            // the current page is set through the handlePageChange props.
                            onClick={() => props.handlePageChange(tab)}
                            className={
                                props.currentPage === tab ? 'nav-link active' : 'nav-link'
                            }
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </header>
    );
}

export default Nav;