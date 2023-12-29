import React from 'react';
import projectImage from '../Images/college project-rafiki.svg';
import image1 from "../Images/project-1.png";
import image2 from "../Images/project-2.png";
import image3 from "../Images/project-3.png";
import image4 from "../Images/project-4.png";

export default function Projects() {

     const cardContents = [
          {
               id: 1,
               image : image1,
               title : 'Digital Clock',
               description : 
               `A Web application made out of HTML, CSS and Javascript 
               where you can see time with a good UI.`,
               link : 'https://tharunvemula-digitalclock.netlify.app/'
          }, {
               id: 2,
               image: image2,
               title : 'Medcare',
               description : 
               `A Hospital Web application made out of HTML, CSS and Javascript 
               where people can book appointments to consult doctor and also can know
               about the services provided in that particular hospital.`,
               link : 'https://tharunvemula-hospitalmsystem.netlify.app/'
          }, {
               id: 3,
               image : image3,
               title : `Foodie's Hub`,
               description : 
               `A Restaurant Web application made out of HTML, CSS, Javascript 
               and bootstrap where people can order food and also reserve table 
               online for occasions.`,
               link : 'https://tharunvemula-foodieshub.netlify.app/'
          }, {
               id: 4,
               image : image4,
               title : `Traveler's Adda`,
               description : 
               `A Travel Agency Web application made with React js library and 
               bootstrap framework where people can book their tour online to 
               travel tourist locations accross the world.`,
               link : 'https://tharunvemula-travelersadda.netlify.app/'
          }
     ];

     return (
     <section className='py-3' id='projects'>
          <div className="text-center p-4">
               <h1><b>MY <span className="text-primary">PROJECTS</span></b></h1>
          </div>
          <div className="container">
               <div className="row">
                    <div className="col-md-5 order-md-2">
                         <img src={projectImage} alt="" />
                    </div>
                    <div className="col-md-7 order-md-1 d-flex align-items-center overflow-auto">
                         {cardContents.map((element)=> {
                              return (
                              <div key={element.id.toString()} className='px-2'>
                              <div className="card" style={{minWidth: "20rem", height: 'fit-content'}}>
                                   <img src={element.image} className="card-img-top" alt="..."/>
                                   <div className="card-body">
                                        <h3 className="card-title">{element.title}</h3>
                                        <a href={element.link} className="card-link" target="_blank" rel='noreferrer'>Visit Project</a>
                                   </div>
                              </div>
                              </div>
                              )
                         })}
                    </div>
               </div>
          </div>
     </section>
  )
}
