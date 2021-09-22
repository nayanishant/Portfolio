import React, { Component } from 'react'
import sheepyShop from '../Gallery/SheepyShops - Google Chrome 10-07-2021 12_28_23.png'
import hackClub from '../Gallery/Hack Club _ PESCE — Mozilla Firefox 23-09-2021 00_03_24.png'
class Projects extends Component {
    render() {
        return (
            <div className="projectWrap">
                <div className="name1">
                    <h3>My Projects</h3>
                </div>
                <div className="cardWrap">
                    <div className="card">
                        <img class="work-img" src={sheepyShop} alt="#"/>
                        <a href="https://github.com/nayanishant/SheepyShops" target="_blank" rel="noopener noreferrer">
                            SheepyShops
                        </a>
                    </div>
                    <div className="card">
                        <img class="work-img" src={hackClub} alt="#"/>
                        <a href="https://github.com/Gautam-flash/hc_pesce_site" target="_blank" rel="noopener noreferrer">
                            Hack Club's Website
                        </a>
                    </div>
                    {/* <div className="card">
                        <img class="work-img" src="./images/12.png" alt="#"/>
                        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                            Portfolio
                        </a>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Projects;