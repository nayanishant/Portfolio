import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div className="header" id="header0">
                <div className="nameInfo">
                    <h2>Nishant Nayan</h2>
                    <p>
                        <span className="firstline">I'm a curious engineering student who is intrested in front-end web development and DSA.</span>
                        <span className="secondline">I have a basic knowlege of C and Python.</span>
                    </p>
                </div>
                <div className="social-links">
                    <a href="http://www.linkedin.com/in/nishant-nayan-773480193/" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/nayanishant" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://twitter.com/Nishant70607283" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        );
    }
}
export default Header;