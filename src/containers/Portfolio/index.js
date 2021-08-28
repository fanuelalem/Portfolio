import React, { Component } from 'react';
import './../../index.css';
import {
  Container,
  Header,
  Button,
  Icon,
  Segment,
  Image,
  Modal
} from 'semantic-ui-react';
// import quiz from './../../components/Images/quiz-app.png';
// import profilegenerator from './../../components/Images/profiler-generator.png';
// import happytravel from './../../components/Images/happytrav.png';
// import weather from './../../components/Images/weather.png';
// import jedipic from './../../components/Images/jedipic.png';
// import employeetracker from './../../components/Images/employee-tracker.png';
// import stock from './../../components/Images/stock.png';
// import employeedirectory from './../../components/Images/employee-directory.png';
// import fitnesstracker from './../../components/Images/fitnessTracker2.png';
import pic1 from './../../components/Images/quizapp.jpg'
import pic2 from './../../components/Images/emp-mangmnt.jpg'
import pic3 from './../../components/Images/drectory.jpg'
import pic4 from './../../components/Images/f.jpg'
import pic5 from './../../components/Images/gitpro.jpg'
import pic6 from './../../components/Images/weatherpic.png'
 import pic8 from './../../components/Images/elearning.jpg'
import pic9 from './../../components/Images/force.jpg'
import pic10 from './../../components/Images/starwars.jpg'


// import requireAuth from '../../hoc/requireAuth';

class Portfolio extends Component {
   
  
  render() {
    return (
      <div>

     
      <div className='backgroundimg' >
        <div style={{width:"100%",height:"100%",backgroundColor:"rgba(255,255,255,.5)"}}>
       

       <div style={{display:"flex",width:"100%",justifyContent:"center",alignItems:"center",height:"100%"}}>
         <div>
           <p className='portfoliotitle' style={{color:"#284053",fontSize:"80px",margin:"0px",fontWeight:"600"}}>Portfolio</p>
           <p className='portfoliodescription' style={{fontSize:"24px",fontw:"300"}}>A collection of Work I have done</p>

         </div>
       </div>
 

      
        </div>
      </div>
      <div  >
        <div style={{width:"100%",height:"100%",backgroundColor:"rgba(255,255,255,1)"}}>
       

       <div style={{display:"flex",width:"100%",justifyContent:"center",alignItems:"center",height:"100%"}}>
         <div style={{paddingTop:"4em"}}>
           <p className='work' style={{color:"#020202",fontSize:"35px",margin:"0px 0 5px 0",fontWeight:"bold"}}>Projects I worked on as a student.
</p>
           <p className='work' style={{fontSize:"18px",margin:"0px",color:"#828282"}}>
             The following displays my in depth knowledge of modern full stack web technologies. 
           </p>

<div  > 
  <Segment style={{ padding: '4em 0' }} vertical>
          <div className="card-containers">
            <div className="image-container" >
            
{/*             
            <div style={{margin:"0 8px 20px 8px",border:"1px solid rgba(0, 0, 0, 0.125)"}}>
            <div className="pic" style={{width:'350px',height:"250px"}}>
               
                
               <Image className="image__img" src={pic1} />
               <div className="image__overlay image__overlay--blur">
                 <div style={{padding:"20px"}}>
 
                   <h2 className='poppins' style={{margin:"0px 0px 5px 0px",fontWeight:"500",fontSize:"20px"}}>
                     {' '}
                     A web application that tests a user's JavaScript
                     knowledge.
                   </h2>
                   <p className='poppins' style={{margin:"10px 0px 10px 0px",fontWeight:"bold"}}>
                     Made using: HTML, JavaScript, Bootstrap, and GitHub Pages.
                   </p>
            
                   <a
                     href="https://fanuelalem.github.io/hw4/index.html"
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     <i
                       style={{ color: 'white' }}
                       className="fas fa-link link"
                     ></i>
                   </a>
                   <a
                     href="https://github.com/fanuelalem/hw4"
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     <i
                       style={{ color: 'white' }}
                       className="fab fa-github github"
                     ></i>
                   </a>
              
              
              
              
                 </div>
               </div>
             </div>
           
             <h2 className='work' style={{margin:"10px 0px 10px 0px",color:"grey",fontSize:"18px"}}> Quiz</h2>
            </div>
               
              
            
              <div style={{margin:"0 8px 20px 8px",border:"1px solid rgba(0, 0, 0, 0.125)"}}>

             
            
              <div className="pic" style={{width:'350px',height:"250px"}}>
                <Image className="image__img" src={pic2} />
                <div className="image__overlay image__overlay--blur">
                <div style={{padding:"20px"}}>
 
 <h2 className='poppins' style={{margin:"0px 0px 5px 0px",fontWeight:"500",fontSize:"20px"}}>
   {' '}
   A command-line application for adding, viewing, updating,
                      and deleting employee information.  
 </h2>
 <p className='poppins' style={{margin:"10px 0px 10px 0px",fontWeight:"bold"}}>
 Made using: Node.js, Inquirer, mySQL, mySQL Workbench, and
                      ESLint. </p>
                   

                    <a
                      href="https://github.com/fanuelalem/employee-tracker"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        style={{ color: 'white' }}
                        className="fab fa-github github"
                      ></i>
                    </a>
                  </div>
                </div>
               </div>

               <h2 className='work' style={{margin:"10px 0px 10px 0px",color:"grey",fontSize:"18px"}}>Employee Management System</h2>

               </div>



               <div style={{margin:"0 8px 20px 8px",border:"1px solid rgba(0, 0, 0, 0.125)"}}>

 

              <div className="pic"style={{width:'350px',height:"250px"}}>
                <Image className="image__img" src={pic5} />
                <div className="image__overlay image__overlay--blur">
                <div style={{padding:"20px"}}>
 
 <h2 className='poppins' style={{margin:"0px 0px 5px 0px",fontWeight:"500",fontSize:"20px"}}>
   {' '}
   A command-line application that will generate a profile in
                      html based off user input.
 </h2>
 <p className='poppins' style={{margin:"10px 0px 10px 0px",fontWeight:"bold"}}>
 Made using: Node.js, Axios, Dotenv, and Inquirer. </p>
              
                   
                
                    
              

                    <a
                      href="https://github.com/fanuelalem/profile_generator"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        style={{ color: 'white' }}
                        className="fab fa-github github"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>

              <h2 className='work' style={{margin:"10px 0px 10px 0px",color:"grey",fontSize:"18px"}}>Github Profile-Generator</h2>

              </div>

              <div style={{margin:"0 8px 20px 8px",border:"1px solid rgba(0, 0, 0, 0.125)"}}>

 
              <div className="pic"style={{width:'350px',height:"250px"}}>
                <Image className="image__img" src={pic4} />
                <div className="image__overlay image__overlay--blur">
                <div style={{padding:"20px"}}>
 
 <h2 className='poppins' style={{margin:"0px 0px 5px 0px",fontWeight:"500",fontSize:"20px"}}>
   {' '}
   A web application that allows a user to create
                      and track their workouts.
 </h2>
 <p className='poppins' style={{margin:"10px 0px 10px 0px",fontWeight:"bold"}}>
 Made using: Express, MongoDB, Mongoose, Morgan, and
                      Heroku. </p>
              
                
            
                    <a
                      href="https://fanuelfitnesstracker.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        style={{ color: 'white' }}
                        className="fas fa-link link"
                      ></i>
                    </a>
                    <a
                      href="https://github.com/fanuelalem/fitness-tracker"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        style={{ color: 'white' }}
                        className="fab fa-github github"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <h2 className='work' style={{margin:"10px 0px 10px 0px",color:"grey",fontSize:"18px"}}> Fitness Tracker</h2>

              </div>       
           

              <div style={{margin:"0 8px 20px 8px",border:"1px solid rgba(0, 0, 0, 0.125)"}}>

               <div className="pic" style={{width:'350px',height:"250px"}}>
                <Image className="image__img" src={pic3} />
                <div className="image__overlay image__overlay--blur">
                <div style={{padding:"20px"}}>
 
 <h2 className='poppins' style={{margin:"0px 0px 5px 0px",fontWeight:"500",fontSize:"20px"}}>
   {' '}
   A web application that lists employee information.
 </h2>
 <p className='poppins' style={{margin:"10px 0px 10px 0px",fontWeight:"bold"}}>
 Made using: React, Random User Generator API, and Heroku.
 </p>
              
                 
              
                    <a
                      href="https://employeedirectory2021.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        style={{ color: 'white' }}
                        className="fas fa-link link"
                      ></i>
                    </a>
                    <a
                      href="https://github.com/fanuelalem/employee-directory"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        style={{ color: 'white' }}
                        className="fab fa-github github"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <h2 className='work' style={{margin:"10px 0px 10px 0px",color:"grey",fontSize:"18px"}}>Employee Directory</h2>

              </div>
              <div style={{margin:"0 8px 20px 8px",border:"1px solid rgba(0, 0, 0, 0.125)"}}>

  
<div className="pic" style={{width:'350px',height:"250px"}}>
  <Image className="image__img" src={pic6} />
 

  
  <div className="image__overlay image__overlay--blur">
  <div style={{padding:"20px"}}>

<h2 className='poppins' style={{margin:"0px 0px 5px 0px",fontWeight:"500",fontSize:"20px"}}>
{' '}
A web application that provides the current weather and a
        5-day forecast for a city.
</h2>
<p className='poppins' style={{margin:"10px 0px 10px 0px",fontWeight:"bold"}}>
Made using: HTML, CSS, JavaScript, jQuery, Bootstrap,
        OpenWeather API, Moment.js, and GitHub Pages. </p>
     
      <a
        href="https://fanuelalem.github.io/weather-app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          style={{ color: 'white' }}
          className="fas fa-link link"
        ></i>
      </a>
      <a
        href="https://github.com/fanuelalem/weather-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          style={{ color: 'white' }}
          className="fab fa-github github"
        ></i>
      </a>
     </div>
 
  
  </div>
 

</div>
<h2 className='work' style={{margin:"10px 0px 10px 0px",color:"grey",fontSize:"18px"}}>Weather DashBoard</h2>

</div>     

            */}
            </div>
          </div>
        </Segment>
           
        </div>
         </div>
       </div>
 

      
        </div>
      
      
        <div  >
        <div style={{width:"100%",height:"100%",backgroundColor:"rgba(255,255,255,1)"}}>
       

       <div style={{display:"flex",width:"100%",justifyContent:"center",alignItems:"center",height:"100%"}}>
         <div style={{paddingTop:"0em"}}>
           <p className='work' style={{color:"#020202",fontSize:"35px",margin:"0px 0 5px 0",fontWeight:"bold"}}>Teamwork
</p>
           <p className='work' style={{fontSize:"18px",margin:"0px",color:"#828282"}}>
           A collection of projects that I collaborated on.
           </p>

           

<div  > 
  <Segment style={{ padding: '4em 0' }} vertical>
          <div className="card-containers">
            <div className="image-container" >
            
            
            <div style={{margin:"0 8px 20px 8px",border:"1px solid rgba(0, 0, 0, 0.125)"}}>
            <div className="pic" style={{width:'350px',height:"250px"}}>
               
                
               <Image className="image__img" src={pic10} />
               <div className="image__overlay image__overlay--blur">
                 <div style={{padding:"20px"}}>
 
                   <h2 className='poppins' style={{margin:"0px 0px 5px 0px",fontWeight:"500",fontSize:"18px"}}>
                     {' '}
                     This application helps you save and track trending
                    stocks from the market onto a personal watchlist. 
                   </h2>
                   <p className='poppins' style={{margin:"10px 0px 10px 0px",fontWeight:"bold"}}>
                   Made using: HTML, CSS, JavaScript, Semantics UI, React,
                    NodeJs, Mongo, PassportJS and Heroku.                   </p>
            
                    <a
                    href="https://stocktracker10for10.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      style={{ color: 'white' }}
                      className="fas fa-link link"
                    ></i>
                  </a>
                  <a
                    href="https://github.com/fanuelalem/Project-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      style={{ color: 'white' }}
                      className="fab fa-github github"
                    ></i>
                  </a>
              
              
              
              
                 </div>
               </div>
             </div>
           
             <h2 className='work' style={{margin:"10px 0px 10px 0px",color:"grey",fontSize:"18px"}}> Stock Tracker</h2>
            </div>
               
              
            
              <div style={{margin:"0 8px 20px 8px",border:"1px solid rgba(0, 0, 0, 0.125)"}}>

             
            
              <div className="pic" style={{width:'350px',height:"250px"}}>
                <Image className="image__img" src={pic8} />
                <div className="image__overlay image__overlay--blur">
                <div style={{padding:"20px"}}>
 
 <h2 className='poppins' style={{margin:"0px 0px 5px 0px",fontWeight:"500",fontSize:"18px"}}>
   {' '}
   A language learning educational app where users can practice and review their progress and admins can
                    assign exercises.
 </h2>
 <p className='poppins' style={{margin:"10px 0px 10px 0px",fontWeight:"bold"}}>
 Made using: HTML, CSS, JavaScript, Semantics UI, React,
                    NodeJs, Mongo, PassportJS and Heroku. </p>
                   

                    <a
                    href="https://learningmadeeazy.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      style={{ color: 'white' }}
                      className="fas fa-link link"
                    ></i>
                  </a>
                  <a
                    href="https://github.com/fanuelalem/AdminApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      style={{ color: 'white' }}
                      className="fab fa-github github"
                    ></i>
                  </a>
                  </div>
                </div>
               </div>

               <h2 className='work' style={{margin:"10px 0px 10px 0px",color:"grey",fontSize:"18px"}}>Admin App</h2>

               </div>



               <div style={{margin:"0 8px 20px 8px",border:"1px solid rgba(0, 0, 0, 0.125)"}}>

 

              <div className="pic"style={{width:'350px',height:"250px"}}>
                <Image className="image__img" src={pic9} />
                <div className="image__overlay image__overlay--blur">
                <div style={{padding:"20px"}}>
 
 <h2 className='poppins' style={{margin:"0px 0px 5px 0px",fontWeight:"500",fontSize:"18px"}}>
   {' '}
   A full stack application that grades a user's response in
                      an interactive trivia game to decide whether they are a
                      jedi or a sith.
 </h2>
 <p className='poppins' style={{margin:"10px 0px 10px 0px",fontWeight:"bold"}}>
 Made using: HTML, CSS, JavaScript, React, NodeJs, SQL, and
                      Heroku. </p>
              
                   
                
                      <a
                      href="https://thejedicode.herokuapp.com/#/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        style={{ color: 'white' }}
                        className="fas fa-link link"
                      ></i>
                    </a>
                    <a
                      href="https://github.com/fanuelalem/Project-02"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        style={{ color: 'white' }}
                        className="fab fa-github github"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>

              <h2 className='work' style={{margin:"10px 0px 10px 0px",color:"grey",fontSize:"18px"}}>The Jedi Force</h2>

              </div>

     
            </div>
          </div>
        </Segment>
           
        </div>
         </div>
       </div>
 

      
        </div>
      
      
      
      
      </div>
    
      
      </div>
    
    
    
     
      </div>
    
    );
  }
}


export default Portfolio;

 