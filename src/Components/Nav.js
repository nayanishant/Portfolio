import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div className="nav">
                <ul className="nav-links">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contacts</li>
                </ul>
            </div>
        );
    }
}

export default NavBar;