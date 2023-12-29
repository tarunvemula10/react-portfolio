import {React, useState} from 'react'

export default function Navbar() {

     const [textColor, updateTextColor] = useState('text-primary');
     const [navBackground, updateNavBackground] = useState('bg-light');
     const [buttonBackground, updateButtonBackground] = useState('primary');

     window.addEventListener('scroll', function() {
          if(window.scrollY>=50) {
               updateTextColor('text-light');
               updateNavBackground('bg-primary');
               updateButtonBackground('light');
          } else {
               updateTextColor('text-primary');
               updateNavBackground('bg-light');
               updateButtonBackground('primary');
          }
     })

     return (
          <header className={`${navBackground} shadow fixed-top`}>
          <nav className={`navbar navbar-expand-lg ${navBackground} container p-3`}>
               <div className="container-fluid">
                    <a className={`navbar-brand fs-4 ${textColor}`} href="#home"><b>Tharun Vemula</b></a>
                    <button className={`navbar-toggler shadow-none bg-${buttonBackground}-subtle`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                         <span className={`fa-solid fa-bars text-primary`}></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                         <div className="navbar-nav">
                              <a className={`nav-link ${textColor}`} aria-current="page" href="#home">Home</a>
                              <a className={`nav-link ${textColor}`} href="#about">About</a>
                              <a className={`nav-link ${textColor}`} href="#projects">Projects</a>
                         </div>
                    </div>
               </div>
          </nav>
     </header>
     )
}