import React from 'react';
import homeLogo from '../Images/Cross-platform software-amico.svg';

export default function Home() {
     return (
     <section className='pt-5' id='home'>
          <div className="container">
               <div className="row">
                    <div className="col-md-5 order-md-2">
                         <img src={homeLogo} alt="" />
                    </div>
                    <div className="col-md-7 d-flex align-items-center order-md-1">
                         <div>
                              <p className="fs-4">Hey there, I'm <b className='text-primary'>Tharun Vemula</b></p>
                              <b className="fs-2">
                                   a <span className="text-primary">Fullstack Developer </span>
                                   who turns ideas <br />into real life products.
                              </b>
                              <div className='pt-3'>
                                   <a href="#projects" className="btn btn-primary w-25">Projects</a>
                                   <span className="px-2"></span>
                                   <a href="#about" className="btn btn-outline-primary border-2 w-25">About</a>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </section>
     )
}
