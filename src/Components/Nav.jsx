import React, { Component } from 'react';
import { Link } from 'react-scroll'

class NavBar extends Component {
    render() {
        return (
            <div className="nav">
                <ul className="nav-links">
                    <li>
                        <Link className="links" to="project0" smooth={true} duration={1000}>Projects</Link>
                    </li>
                    <li>
                        <Link className="links" to="app0" smooth={true} duration={1000}>About</Link>
                    </li>
                    <li>
                        <Link className="links" to="contact0" smooth={true} duration={1000}>Contacts</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavBar;