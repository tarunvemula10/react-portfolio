import React from 'react';
import projectImage from '../Images/college project-rafiki.svg';

export default function Projects() {
     return (
     <section className='mt-4' id='projects'>
          <div className="text-center p-4">
               <h1><b>MY <span className="text-primary">PROJECTS</span></b></h1>
          </div>
          <div className="container">
               <div className="row">
                    <div className="col-md-5 order-md-2">
                         <img src={projectImage} alt="" />
                    </div>
                    <div className="col-md-7 order-md-1">
                    </div>
               </div>
          </div>
     </section>
  )
}
