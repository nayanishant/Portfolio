import React from 'react'
// import sheepyShop from '../Gallery/SheepyShops - Google Chrome 10-07-2021 12_28_23.png'
// import hackClub from '../Gallery/Hack Club _ PESCE — Mozilla Firefox 23-09-2021 00_03_24.png'
// import personalSite from '../Gallery/React App - Google Chrome 23-09-2021 10_09_22.png'
import projectData from "../Data/ProjectsData"

const Projects = () => {
        return (
            <div className="projectWrap" id="project0">
                <div className="name1">
                    <h3>My Projects</h3>
                </div>
                <div className="cardWrap">
                    {
                        projectData.map((data) => {
                            return (
                                <div className="card" id=     {data.id}>
                                    <img src={data.image} alt="#"/>
                                    <a href={data.url} target="_blank" rel="noopener noreferrer">
                                        {data.name}
                                    </a>
                                </div>
                            )
                        })
                    }   
                </div>
            </div>
        );
    }

export default Projects;