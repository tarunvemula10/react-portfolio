import React from 'react';
import aboutImage from '../Images/Webinar-pana.svg'

export default function About() {
     return (
     <section className='bg-secondary-subtle mt-4' id='about'>
          <div className="text-center p-4">
               <h1><b>ABOUT <span className="text-primary">ME</span></b></h1>
          </div>
          <div className="container">
               <div className="row">
                    <div className="col-md-5">
                         <img src={aboutImage} alt="" />
                    </div>
                    <div className="col-md-7 d-flex align-items-center">
                         <div>
                              <p>
                                   Hello folks, I'm <b className="text-primary">Tharun Vemula</b>
                                   I'm very passionate about developing web applications. I'm a trained aspirant in technologies 
                                   such as <b className="text-primary">HTML, CSS, JavaScript, React, Java, J2EE </b> and <b className="text-primary">SQL</b>. Check out my resume to know more about me.
                              </p>
                              <a href="/" className="btn btn-outline-primary border-2 w-25">Resume</a>
                              <div className="pt-3"></div>
                         </div>
                    </div>
               </div>
          </div>
     </section>
     )
}