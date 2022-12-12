import React from 'react'
import '../styles/projectData.css'
import { ItemsData } from './ItemsData'
import imageFor from '../assets/pexels-fauxels-3183150.jpg'

function ProjectData() {
    return (
        <div className='project-data'>
            <h1>projects</h1>
            <div className='project-container'>
            {ItemsData.map((item, index)=> {
                return(
                    <div className='data-container' key={index}>
                        
                        <img src={imageFor} alt="souvineeer" />

                        <h4>{item.heading}</h4>
                        <p>{item.text}</p>
                        <div className='btn-container'>
                            <button className='btn btn-warning'>VIEW</button>
                            <button className='btn btn-warning'>SOURCE</button>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default ProjectData