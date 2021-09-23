import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <div className="contact" id="contact0">
                <div className="contactMe">
                    <h3>Let's Get In Touch!</h3>
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
                    <a href="mailto:nayanishant.info@gamil.com" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-envelope-open"></i>
                    </a>
                </div>
            </div>
        )
    };
}

export default Contact