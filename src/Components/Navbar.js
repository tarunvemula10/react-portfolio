import {React, useState} from 'react'

export default function Navbar() {

     const [textColor, updateTextColor] = useState('text-primary');
     const [navBackground, updateNavBackground] = useState('bg-light');

     window.addEventListener('scroll', function() {
          if(window.scrollY>=50) {
               updateTextColor('text-light');
               updateNavBackground('bg-primary');
          } else {
               updateTextColor('text-primary');
               updateNavBackground('bg-light');
          }
     })

     return (
     <header className={`${navBackground} shadow fixed-top`}>
          <nav className={`navbar navbar-expand-lg ${navBackground} container p-3`}>
               <div className="container-fluid">
                    <a className={`navbar-brand fs-4 ${textColor}`} href="/"><b>Tharun Vemula</b></a>
                    <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                         <span className={`navbar-toggler-icon ${textColor}`}></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                         <div className="navbar-nav">
                              <a className={`nav-link active ${textColor}`} aria-current="page" href="/">Home</a>
                              <a className={`nav-link ${textColor}`} href="/">About</a>
                              <a className={`nav-link ${textColor}`} href="/">Projects</a>
                         </div>
                    </div>
               </div>
          </nav>
     </header>
     )
}