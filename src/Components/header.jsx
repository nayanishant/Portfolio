import React, { Component } from 'react'
import SocialMedia from './SocialMedia';

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
                <SocialMedia />
            </div>
        );
    }
}
export default Header;