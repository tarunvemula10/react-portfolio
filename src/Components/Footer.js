import React from 'react'

export default function Footer() {
     return (
     <footer className='py-5 bg-primary'>
          <div className="container">
               <div className="row">
                    <div className="col-md d-flex align-items-center">
                         <div>
                              <h2 className="text-light"><b>Tharun<br />Vemula</b></h2>
                              <p className="text-light">Living, Learning & Leveling Up</p>
                         </div>
                    </div>
                    <div className="col-md text-center d-flex justify-content-md-center align-items-center text-light text-opacity-75">
                         <p><i className="fa-solid fa-envelope"></i> : tarun.vemula2445@gmail.com</p>
                    </div>
                    <div className="col-md d-flex justify-content-md-end">
                         <div className="text-light">
                              <h3 className="text-light">
                                   <b>GET SOCIAL</b>
                              </h3>
                              <nav>
                                   <a href="https://www.facebook.com/profile.php?id=100084423033595" target='_blank' rel='noreferrer' className='p-2 text-light'><i className="fa-brands fa-facebook-f"></i></a>
                                   <a href="https://twitter.com/tharunvemula10" target='_blank' rel='noreferrer' className='p-2 text-light'><i className="fa-brands fa-x-twitter"></i></a>
                                   <a href="https://github.com/tarunvemula10" target='_blank' rel='noreferrer' className='p-2 text-light'><i className="fa-brands fa-github"></i></a>
                                   <a href="https://www.linkedin.com/in/tharun-vemula-077925215/" target='_blank' rel='noreferrer' className='p-2 text-light'><i className="fa-brands fa-linkedin-in"></i></a>
                              </nav>
                         </div>
                    </div>
               </div>
               <hr />
               <div className="container text-center text-light align-items-center">
                    <small>&copy;All rights Reserved. Made by <a href="#home"><b className='text-light'>Tharun Vemula</b></a></small>
               </div>
          </div>
     </footer>
     )
}
