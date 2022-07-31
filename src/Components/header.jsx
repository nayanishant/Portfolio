import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div className="header" id="header0">
                <div className="nameInfo">
                    <h2>Nishant Nayan</h2>
                    <p>
                        <span className="firstline">As the core member of my college's coding club I have developed a responsive website for the club while working in a team structure where we extensively used GIT and notion to collaborate.I also have experience of creating portfolio sites and frontend of web apps.</span>
                        <span className="secondline">My latest project is the frontend of an industrial IoT solution.</span>
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