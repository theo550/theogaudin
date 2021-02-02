import React from 'react';
import './projects.css';
import * as data from './data.json';
import {Link} from 'react-router-dom';


// import all images

import chatbot from './images/chatbot.png'
import rock from './images/rockpaperscissors.png'
import eyes from './images/eyes.png'
import wacdonalds from './images/wacdonalds.png'
import drumkit from './images/drumkit.png'
import landingpage from './images/landing-page.png'


function Projects () {


   const images = [chatbot, rock, eyes, wacdonalds, drumkit, landingpage]

   return <section className='list-wrapper--projects'>

   <ul className='list--projects'>
      {data.projects.map((project, index) => (
         <Link to={'/' + index}>
            <li className='list-project--item' key={index}>
               <img src={images[index]} alt={project.alt}  />
            </li>
         </Link>
      ))}
   </ul>

   </section>
   
}

export default Projects;