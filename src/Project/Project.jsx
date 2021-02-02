import React from 'react';
import './project.css';
import {useParams} from 'react-router-dom';
import * as data from '../Projects/data.json'

// import all images

import chatbot from '../Projects/images/chatbot.png'
import rock from '../Projects/images/rockpaperscissors.png'
import eyes from '../Projects/images/eyes.png'
import wacdonalds from '../Projects/images/wacdonalds.png'
import drumkit from '../Projects/images/drumkit.png'
import landingpage from '../Projects/images/landing-page.png'

function Project () {

  let {id} = useParams()
  const images = [chatbot, rock, eyes, wacdonalds, drumkit, landingpage]

  const technologies = data.projects[id].technologies
  


  return <section className="project">

    <img className='project-image' src={images[id]} alt={data.projects[id].alt}/>

    <div className="projet-details">

      <h1>{data.projects[id].name} : </h1>
      <p>Pour voir le projet, cliquez <a href={data.projects[id].link}>ici</a></p>

      <div className="technologies">
        <h3>Technologies :</h3>

        {technologies.map((technologie ,index) => {
          return <p key={index}>{'- ' + technologie}</p>
        })}
      </div>

      <div className="description">
        <h3>Description :</h3>
        <p>{data.projects[id].description}</p>
      </div>

    </div>

  </section>
}

export default Project;
