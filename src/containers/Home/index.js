import React, { Component } from 'react';
import './../../index.css';
import {
  Container,
  Header,
  Button,
  Grid,
  Segment,
  Image,
 
  Icon
} from 'semantic-ui-react';
import Nav from './../../components/nav/index'
import icon1image from './../../components/Images/icon1.jpg'
import icon2image from './../../components/Images/icon2.jpg'
import icon3image from './../../components/Images/icon3.jpg'
import icon4image from './../../components/Images/icon4.jpg'
 import { debounce } from 'lodash';
import pic from './../../components/Images/snow.jpg';
import pic1 from './../../components/Images/quizapp.jpg'
import pic2 from './../../components/Images/emp-mangmnt.jpg'
import pic3 from './../../components/Images/drectory.jpg'
import pic4 from './../../components/Images/f.jpg'
import pic5 from './../../components/Images/gitpro.jpg'
import pic6 from './../../components/Images/weatherpic.png'
import pngitem from './../../components/Images/pngitem.png'
 import AosScroll from './../Aos';
import 'aos/dist/aos.css';
 import s1 from './../../components/Images/stockcanva.png';
import s2 from './../../components/Images/mgmt.jpg';
 import weather from './../../components/Images/weatherpic.png';
 import Modalx from './../Modal/index'
 import Modal from 'react-modal';
 


export default class Home extends Component {

  state = {
    all : 'all',
    express: '',
    react: '',
    js: '',
    isOpen:false
  }
  componentDidMount = () => {
    
    const image = document.getElementById('image')
    const myinfo = document.getElementById('whoami')
    const intro = document.getElementById('introparagraph')
    const about = document.getElementById('aboutintro')
    const hr = document.getElementById('hr')
    const icon1 = document.getElementById('icon1')
    const icon2 = document.getElementById('icon2')
    const icon3 = document.getElementById('icon3')
    const icon4 = document.getElementById('icon4')
    const icontext = document.getElementById('icontext-1')
    const icontext2 = document.getElementById('icontext-2')
    const icontext3 = document.getElementById('icontext-3')
    const icontext4 = document.getElementById('icontext-4')
    const proanim = document.getElementById('proanim')
    const proanim2 = document.getElementById('proanim-2')
    const proanim3 = document.getElementById('proanim-3')
    const proanim4 = document.getElementById('proanim-4')
    const proanim5 = document.getElementById('proanim-5')
    const proanim6 = document.getElementById('proanim-6')
    const proanim7 = document.getElementById('proanim-7')
    const proanim8 = document.getElementById('proanim-8')
    const proanim9 = document.getElementById('proanim-9')
    const nav = document.getElementById('nav')
    const back = document.getElementById('back')
    const work = document.getElementById('header')

    const top = image.getBoundingClientRect().top
    const height = window.innerHeight-50
     


    if(top<height){
      image.classList.add('already-on-page')
      myinfo.classList.add('already-on-page')
      intro.classList.add('already-on-page')
      proanim.classList.add('already-on-page-proanim')
      proanim2.classList.add('already-on-page-proanim-2')
      proanim3.classList.add('already-on-page-proanim-3')
      proanim4.classList.add('already-on-page-proanim-4')
      proanim5.classList.add('already-on-page-proanim-5')
      proanim6.classList.add('already-on-page-proanim-6')
      proanim7.classList.add('already-on-page-proanim-7')
      proanim8.classList.add('already-on-page-proanim-8')
      proanim9.classList.add('already-on-page-proanim-9')
      about.classList.add('already-on-page')
      hr.classList.add('already-on-page')
      icon1.classList.add('already-on-page')
      icon2.classList.add('already-on-page')
      icon3.classList.add('already-on-page')
      icon4.classList.add('already-on-page')
      icontext.classList.add('already-on-page')
      icontext2.classList.add('already-on-page')
      icontext3.classList.add('already-on-page')
      icontext4.classList.add('already-on-page')
      work.classList.add('already-on-page')
    }else{
      image.classList.add('not-on-page')
      myinfo.classList.add('not-on-page')
      intro.classList.add('not-on-page')
      proanim.classList.add('not-on-page-proanim')
      proanim2.classList.add('not-on-page-proanim-2')
      proanim3.classList.add('not-on-page-proanim-3')
      proanim4.classList.add('not-on-page-proanim-4')
      proanim5.classList.add('not-on-page-proanim-5')
      proanim6.classList.add('not-on-page-proanim-6')
      proanim7.classList.add('not-on-page-proanim-7')
      proanim8.classList.add('not-on-page-proanim-8')
      proanim9.classList.add('not-on-page-proanim-9')
      about.classList.add('not-on-page')
      hr.classList.add('not-on-page')
      icon1.classList.add('not-on-page')
      icon2.classList.add('not-on-page')
      icon3.classList.add('not-on-page')
      icon4.classList.add('not-on-page')
      icontext.classList.add('not-on-page')
      icontext2.classList.add('not-on-page')
      icontext3.classList.add('not-on-page')
      icontext4.classList.add('not-on-page')
      work.classList.add('not-on-page')
    }

    const scrollFunction = (e) => {
      console.count(e,'e')
    const scrolly = window.scrollY
    const backgroundheight = back.getBoundingClientRect().height 
    const navheight = nav.getBoundingClientRect().height
    const getFixedClass = backgroundheight+navheight
    const getnavminus14height = backgroundheight-14
    const top = image.getBoundingClientRect().top
    const greaterthen305 = top<window.innerHeight +305
    const greaterthen175 = top<window.innerHeight +175
    const heightplus20 = top<window.innerHeight +20
    const heightlessthen120 = top<window.innerHeight -120
    const heightlessthen340 = top<window.innerHeight -340
    const heightlessthen1300 = top<window.innerHeight -1300
    if(scrolly > getFixedClass){
      nav.classList.add('fixed')
    }
     else if(scrolly <= getnavminus14height){
      nav.classList.remove('fixed')
    }

     if(greaterthen305 && about.classList.contains('not-on-page')){
      about.classList.add('fade-in-right')
    } 
     if(greaterthen175 && hr.classList.contains('not-on-page')){
        hr.classList.add('fade-in-right-hr')
        } 

  
        if(heightplus20  && icon2.classList.contains('not-on-page')){
          icon1.classList.add('switchanimation')
          icon2.classList.add('switchanimation-2')
          icon3.classList.add('switchanimation-3')
          icon4.classList.add('switchanimation-4')
        } 

        if(heightlessthen120 && icontext.classList.contains('not-on-page')){
          icontext.classList.add('fade-in-icon')
          icontext2.classList.add('fade-in-icon2')
          icontext3.classList.add('fade-in-icon3')
          icontext4.classList.add('fade-in-icon4')
        } 

        if(heightlessthen340 && image.classList.contains('not-on-page')){
          image.classList.add('fade-in-right')
          myinfo.classList.add('fade-in-right')
  
          intro.classList.add('fade-in-left')
          proanim.classList.add('progressanimation')
          proanim2.classList.add('progressanimation-2')
          proanim3.classList.add('progressanimation-3')
          proanim4.classList.add('progressanimation-4')
          proanim5.classList.add('progressanimation-5')
          proanim6.classList.add('progressanimation-6')
          proanim7.classList.add('progressanimation-7')
          proanim8.classList.add('progressanimation-8')
          proanim9.classList.add('progressanimation-9')
  
        }
       
        if(heightlessthen1300 && work.classList.contains('not-on-page')){
          work.classList.add('fade-in-left')
           
  
        }

    }


    window.addEventListener('scroll' , debounce(scrollFunction,15))

     

  }
 

 
 
  render() {
   
  
    return (
      <div >
        <div className='mask'>
          <div className={`${this.state.isOpen ? 'maskdiv' : 'nonvisible'}`} >

          </div>

        </div>

        <div className="background" id='back'>
        <div className="info">
          <Container fluid>
            <Grid divided="vertically">
              <Grid.Row columns={2}>
                <Grid.Column width={3}></Grid.Column>
                <Grid.Column width={13} style={{margin:"0px"}}>
                  <h1
                    className="name"
                     style={{
                      fontSize: '65px',
                      lineHeight: '1.2',
                      padding: '105px 0 0 0',
                      fontWeight: '800',
                      textAlign: 'left',
                      margin: '0 0 12px 0',
                    }}
                  >
                    FANUEL N. ALEM
                  </h1>

                  <p
                    className="pname"
                    style={{
                      margin: '0 0 0 0',
                      color: '#473f4f',
                      padding: '0 0 11px 0px',
                    }}
                  >
                    FULL-STACK SOFTWARE ENGINEER
                    <br></br>
                  </p>
                  <div className="style" style={{ textAlign: 'left' }}>
                    {' '}
                    <a href="mailto:fanuelnalem@outlook.com">
                      <button className="sendmeamessage">
                        <span
                          style={{
                            fontSize: '18px',
                            color: 'white',
                            fontWeight: 'bold',
                          }}
                        >
                          Connect With Me
                        </span>{' '}
                      </button>
                    </a>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
       </div>
       <Nav id='nav' />

  
      <div style={{ backgroundColor: '#f9f9f9', padding: '59px 0 100px 0' }}>
        <Container className="bioo">
         
  
              
          <div style={{height:"190px"}}>
          <div style={{display:"flex",justifyContent:"center"}}>
              <h2
                style={{ padding: '45px 0 10px 0',marginBottom:"8px" }}
                className="txtblack"
                id='aboutintro'
              >
                ABOUT
              </h2>
            
               </div>
       <div id='hr'  style={{display:"flex",justifyContent:"center"}} >
         <div  style={{width:"70px",height:"4px",margin:"0px",backgroundColor:"#284053"}}></div>
         </div>  

       
          </div>

         <div style={{height:"365px"}}>
         <Grid divided="vertically">
              <Grid.Row columns={4}>
                <Grid.Column  >
                     <div style={{display:"flex",justifyContent:"center"}}>
                     <img id='icon1' src = {icon1image} style={{width:"130px",height:"130px"}} />


                     {/* <div id='icon1'className='hexagon'>
                      <i style={{color:"white",fontSize:"45px",paddingTop:"8px"}} class="fas fa-bolt"></i>
                       
                        </div> */}

                     </div>
                    
                     <div id='icontext-1' style={{marginTop:"45px"}}>
                 <h2 className='poppins' style={{margin:"0px 0 0 0",color:"#616161"}}>Fast</h2>
<p className='poppins' style={{margin:"5px 0 0 0",color:"#616161",lineHeight:'1.5',fontSize:"15px",fontWeight:"300"}}>Fast load times and lag free interaction, my highest priority.</p>
                 </div>
                </Grid.Column>
                <Grid.Column>
                <div style={{display:"flex",justifyContent:"center"}}>
                  <img id='icon2' src = {icon2image} style={{width:"130px",height:"130px"}} />
                {/* <div id='icon2'className='hexagon'>
                <i style={{color:"white",fontSize:"45px",paddingTop:"8px"}} class="fas fa-laptop"></i>

                   </div> */}

                </div>

                <div id='icontext-2' style={{marginTop:"45px"}}>
                 <h2 className='poppins' style={{margin:"0px 0 0 0",color:"#616161"}}>Responsive</h2>
<p className='poppins' style={{margin:"5px 0 0 0",color:"#616161",lineHeight:'1.5',fontSize:"15px",fontWeight:"300"}}>My layouts will work on any device, big or small.</p>
                 </div>
                </Grid.Column>
                <Grid.Column>
                <div style={{display:"flex",justifyContent:"center"}}>

                <img id='icon3' src = {icon3image} style={{width:"130px",height:"130px"}} />


                   
            </div>
            <div id='icontext-3' style={{marginTop:"45px"}}>
                 <h2 className='poppins' style={{margin:"0px 0 0 0",color:"#616161"}}>Intuitive</h2>
<p className='poppins' style={{margin:"5px 0 0 0",color:"#616161",lineHeight:'1.5',fontSize:"15px",fontWeight:"300"}}>Strong preference for easy to use, intuitive UX/UI.</p>
                 </div>
                </Grid.Column>
                <Grid.Column>
                <div style={{display:"flex",justifyContent:"center"}}>


                 
                <img id='icon4' src = {icon4image} style={{width:"130px",height:"130px"}} />

                    </div>
                    <div id='icontext-4' style={{marginTop:"45px"}}>
                 <h2 className='poppins' style={{margin:"0px 0 0 0",color:"#616161"}}>Dynamic</h2>
<p className='poppins' style={{margin:"5px 0 0 0",color:"#616161",lineHeight:'1.5',fontSize:"15px",fontWeight:"300"}}>Websites don't have to be static, I love making pages come to life.</p>
                 </div>
                </Grid.Column>
             
              </Grid.Row>
            </Grid>         </div>

            </Container>

          <Grid>
            <Grid.Column width={8} style={{ padding: '0px 0 0 0' }}>
 

            <div style={{display:"flex",justifyContent:"center"}}>
  <Image
              
                src={pic}
                id='image'

                size='medium'
                 
                verticalAlign="top"
                style={{ margin: '0px 0 0 40px', padding: '0px 0 0 0' }}
              />
    </div>
              
    <div    
    id='whoami'             
 style={{margin:"20px 0 0 40px"}}>
             <h2 className='work' style={{color:"grey",margin:"0px 0 5px 0"}}>Who Am I?</h2>

             <div                
 style={{marginLeft:"100px",marginRight:"100px"}} >
<p style={{fontSize:"16px",fontWeight:"300"}}>Hello, I'm a creative and super ambitious professional with a
                vast array of knowledge in many different front end and back
                end languages, responsive frameworks, databases, and best code
                practices aimed at delivering expected and promised results. I
                utilize unique strategies and approaches while working
                tirelessly around the clock to provide a satisfying result. <a href='https://www.linkedin.com/in/fanuel-alem-12991b32/' target='_blank'>Learn More</a>
</p>
 </div>
              </div>
 
            </Grid.Column>
            <Grid.Column width={8}>
              <div style={{display:"flex",justifyContent:"flex-start"}}>

              
              <div id='introparagraph' style={{width:"550px",marginTop:"40px"}}>

           
         <div style={{display:"flex",justifyContent:"flex-end",height:"28px",margin:"0 0 15px 0",position:"relative"}}>
          
            <div style={{backgroundColor:'#ac6dff',width:"25%"}}>
             <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",color:"white",fontWeight:"bold"}}>HTML</div>
           </div>
           <div style={{backgroundColor:'#ddd',width:"75%",display:"flex"}}>
 
            
           <div id='proanim'  style={{backgroundColor:"#bb87ff",height:"100%"}}> </div>
           
<div style={{position:"absolute",right:3,top:4,color:'#666'}}>90%</div>
            </div>
 
           </div> 
       
       
       
       
       
           <div style={{display:"flex",justifyContent:"flex-end",height:"28px",margin:"0 0 15px 0",position:"relative"}}>
          
          <div style={{backgroundColor:'#ac6dff',width:"25%"}}>
           <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",color:"white",fontWeight:"bold"}}>CSS</div>
         </div>
         <div style={{backgroundColor:'#ddd',width:"75%",display:"flex"}}>


         <div id='proanim-2'  style={{backgroundColor:"#bb87ff",height:"100%"}}> </div>
         
<div style={{position:"absolute",right:3,top:4,color:'#666'}}>90%</div>
          </div>

         </div> 

         <div style={{display:"flex",justifyContent:"flex-end",height:"28px",margin:"0 0 15px 0",position:"relative"}}>
          
          <div style={{backgroundColor:'#ac6dff',width:"25%"}}>
           <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",color:"white",fontWeight:"bold"}}>React</div>
         </div>
         <div style={{backgroundColor:'#ddd',width:"75%",display:"flex"}}>


         <div id='proanim-3'  style={{backgroundColor:"#bb87ff",height:"100%"}}> </div>
         
<div style={{position:"absolute",right:3,top:4,color:'#666'}}>85%</div>
          </div>

         </div> 
           
         <div style={{display:"flex",justifyContent:"flex-end",height:"28px",margin:"0 0 15px 0",position:"relative"}}>
          
          <div style={{backgroundColor:'#ac6dff',width:"25%"}}>
           <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",color:"white",fontWeight:"bold"}}>Javascript</div>
         </div>
         <div style={{backgroundColor:'#ddd',width:"75%",display:"flex"}}>


         <div id='proanim-4'  style={{backgroundColor:"#bb87ff",height:"100%"}}> </div>
         
<div style={{position:"absolute",right:3,top:4,color:'#666'}}>85%</div>
          </div>

         </div> 
         <div style={{display:"flex",justifyContent:"flex-end",height:"28px",margin:"0 0 15px 0",position:"relative"}}>
          
          <div style={{backgroundColor:'#ac6dff',width:"25%"}}>
           <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",color:"white",fontWeight:"bold"}}>Mobile Dev</div>
         </div>
         <div style={{backgroundColor:'#ddd',width:"75%",display:"flex"}}>


         <div id='proanim-5'  style={{backgroundColor:"#bb87ff",height:"100%"}}> </div>
         
<div style={{position:"absolute",right:3,top:4,color:'#666'}}>80%</div>
          </div>

         </div> 
         <div style={{display:"flex",justifyContent:"flex-end",height:"28px",margin:"0 0 15px 0",position:"relative"}}>
          
          <div style={{backgroundColor:'#ac6dff',width:"25%"}}>
           <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",color:"white",fontWeight:"bold"}}>UI Design</div>
         </div>
         <div style={{backgroundColor:'#ddd',width:"75%",display:"flex"}}>


         <div id='proanim-8'  style={{backgroundColor:"#bb87ff",height:"100%"}}> </div>
         
<div style={{position:"absolute",right:3,top:4,color:'#666'}}>75%</div>
          </div>

         </div> 
       
         <div style={{display:"flex",justifyContent:"flex-end",height:"28px",margin:"0 0 15px 0",position:"relative"}}>
          
          <div style={{backgroundColor:'#ac6dff',width:"25%"}}>
           <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",color:"white",fontWeight:"bold"}}>NodeJs</div>
         </div>
         <div style={{backgroundColor:'#ddd',width:"75%",display:"flex"}}>


         <div id='proanim-6'  style={{backgroundColor:"#bb87ff",height:"100%"}}> </div>
         
<div style={{position:"absolute",right:3,top:4,color:'#666'}}>80%</div>
          </div>

         </div> 
        
         <div style={{display:"flex",justifyContent:"flex-end",height:"28px",margin:"0 0 15px 0",position:"relative"}}>
          
          <div style={{backgroundColor:'#ac6dff',width:"25%"}}>
           <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",color:"white",fontWeight:"bold"}}>Express</div>
         </div>
         <div style={{backgroundColor:'#ddd',width:"75%",display:"flex"}}>


         <div id='proanim-7'  style={{backgroundColor:"#bb87ff",height:"100%"}}> </div>
         
<div style={{position:"absolute",right:3,top:4,color:'#666'}}>80%</div>
          </div>

         </div> 
        
       
       
       
         <div style={{display:"flex",justifyContent:"flex-end",height:"28px",margin:"0 0 15px 0",position:"relative"}}>
          
          <div style={{backgroundColor:'#ac6dff',width:"25%"}}>
           <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",color:"white",fontWeight:"bold"}}>MongoDB/SQL</div>
         </div>
         <div style={{backgroundColor:'#ddd',width:"75%",display:"flex"}}>


         <div id='proanim-9'  style={{backgroundColor:"#bb87ff",height:"100%"}}> </div>
         
<div style={{position:"absolute",right:3,top:4,color:'#666'}}>75%</div>
          </div>

         </div>
          
 
 
    
           </div>
           </div>
            
            </Grid.Column>
          </Grid>
      
    
    
    
    
    
      </div>


      
 

      <div className="tech">
        <Segment style={{ padding: '10em 0em' }} vertical>
          <Container text>
            <Header
              as="h3"
              style={{
                fontSize: '3.5em',
                color: 'white',
                fontFamily: "'Maven Pro', sans-serif",
                fontWeight: '700',
                letterSpacing: '5px',
              }}
            >
              TECHNOLOGY
            </Header>
            <br></br>
            <Grid divided="vertically">
              <Grid.Row columns={6}>
                <Grid.Column>
                  <div className="About-icon-div">
                    <i
                      style={{ fontSize: '5.5rem', color: 'white' }}
                      className="About-icon fab fa-html5"
                    ></i>
                    <p className="descrip" style={{ color: 'white' }}>
                      HTML5
                    </p>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div className="About-icon-div">
                    <i
                      style={{ fontSize: '5.5rem', color: 'white' }}
                      className="About-icon fab fa-css3-alt"
                    ></i>
                    <p className="descrip" style={{ color: 'white' }}>
                      CSS3
                    </p>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div className="About-icon-div">
                    <i
                      style={{ fontSize: '5.5rem', color: 'white' }}
                      className="About-icon fab fa-js"
                    ></i>
                    <p className="descrip" style={{ color: 'white' }}>
                      JavaScript
                    </p>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div className="About-icon-div">
                    <i
                      style={{ fontSize: '5.5rem', color: 'white' }}
                      className="About-icon fab fa-bootstrap"
                    ></i>
                    <p className="descrip" style={{ color: 'white' }}>
                      Bootstrap
                    </p>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div className="About-icon-div">
                    <i
                      style={{ fontSize: '5.5rem', color: 'white' }}
                      className="About-icon fab fa-react"
                    ></i>
                    <p className="descrip" style={{ color: 'white' }}>
                      React
                    </p>
                  </div>
                </Grid.Column>

                <Grid.Column>
                  <div className="About-icon-div">
                    <i
                      style={{ fontSize: '5.5rem', color: 'white' }}
                      className="About-icon fab fa-node"
                    ></i>
                    <p className="descrip" style={{ color: 'white' }}>
                      Node.js
                    </p>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
     
    <div style={{backgroundColor:"#9d72c8"}}>
   
     
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    
   
    
      <Container  text>
     

       <h2
       id='header'
       style={{ padding: '5px 0 35px 0' }}
                className="txt"
               >
                MY WORK
              </h2>
        
      </Container>
      <AosScroll />

      </div>
<div style={{height:"60px",backgroundColor:"#9d72c8"}}></div>

      <div style={{height:"150px",margin:"0px 0 0 0",display:"flex",justifyContent:"center",backgroundColor:"#f9f9f9"}}>
<div style={{display:"flex",justifyContent:'space-evenly',width:"70%",paddingTop:"55px"}}>
 <div className='push'  onClick={()=>{
  this.setState({all:'all'})
}}   style={{backgroundColor:this.state.all == 'all'? "#8b5eb4" : null ,width:"100%",height:"30%",display:"flex",alignItems:"center",justifyContent:"center",margin:"5px"}}><p style={{color:this.state.all == 'all'? "white" : '#616161',fontSize:"20px",fontWeight:"500"}}>ALL</p> </div>
<div className='push' onClick={()=>{
  this.setState({all:'node'})
}}   style={{width:"100%",backgroundColor:this.state.all == 'node'? "#8b5eb4" : null,height:"30%",display:"flex",alignItems:"center",justifyContent:"center",margin:"5px"}}><p style={{color:this.state.all == 'node'? "white" : '#616161',fontSize:"20px",fontWeight:"500"}}>NODE-JS/EXPRESS</p></div>

<div className='push' onClick={()=>{
  this.setState({all:'react'})
}}    style={{width:"100%",height:"30%",display:"flex",backgroundColor:this.state.all == 'react'? "#8b5eb4" : null,alignItems:"center",justifyContent:"center",margin:"5px"}}> <p style={{color:this.state.all == 'react'? "white" : '#616161',fontSize:"20px",fontWeight:"500"}}>MERN/SQL </p> </div>
<div className='push' onClick={()=>{
  this.setState({all:'js'})
}}    style={{width:"100%",height:"30%",display:"flex",alignItems:"center",justifyContent:"center",margin:"5px",backgroundColor:this.state.all == 'js'? "#8b5eb4" : null}}><p style={{color:this.state.all == 'js'? "white" : '#616161',fontSize:"20px",fontWeight:"500"}}>JAVASCRIPT </p> </div>



 

</div>
 

      </div>

      
 
      <Segment style={{ padding: '0em 0 6em 0em',backgroundColor:"#f9f9f9" }} vertical>
        
            <div className={`image-container ${this.state.all == 'all'? 'transitioneffect' : this.state.all == 'react'? 'transitioneffect2'
            : this.state.all == 'js'? 'transitioneffect3':this.state.all =='node'? 'transitioneffect1' : null}`}  >
            
<div className={`${this.state.all == 'all'||this.state.all == 'react'? 'activediv' : 'inactivediv'}` }>

 
<div className='cardclass' style={{position:"relative",width:"390px",height:"300px"}}>

 
  
<div className='bgmg1' style={{width:'100%',height:'100%',position:"absolute",left:0,bottom:0,top:0}} >

 <div className='onhoverimg' style={{height:"100%",width:"100%"}}>

  
 <div className='cardcontent1' >
<h2 className='work' style={{margin:"0px"}}>Stock Tracker </h2>
<p style={{margin:"5px 0 0 0",color:"#e31b6d",fontSize:"18px"}}>React Js/Node Js/MongoDB</p>
</div>


<div className='cardcontent'>
 
<button className='learnmorework' style={{fontWeight:"300"}}>LEARN MORE</button>
</div>



</div>
</div>


</div>


            
            </div>



    


           
            <div className={`${this.state.all == 'all'||this.state.all == 'react'? 'activediv' : 'inactivediv'}`}>

         
 <div className='cardclass' style={{position:"relative",width:"390px",height:"300px"}}>

 
  
<div className='bgmg2' style={{width:'100%',height:'100%',position:"absolute",left:0,bottom:0,top:0}} >

 <div className='onhoverimg' style={{height:"100%",width:"100%"}}>

  
 <div className='cardcontent1' >
<h2 className='work' style={{margin:"0px"}}>Learning Made Eazy</h2>
<p style={{margin:"5px 0 0 0",color:"#e31b6d",fontSize:"18px"}}>React Js/Node Js/MongoDB</p>
</div>


<div className='cardcontent'>

<button className='learnmorework' style={{fontWeight:"300"}}>LEARN MORE</button>
</div>



</div>
</div>


</div>


          
            </div>  








            <div className={`${this.state.all == 'all'||this.state.all == 'react'? 'activediv' : 'inactivediv'}`}>

      

    
 <div className='cardclass' style={{position:"relative",width:"390px",height:"300px"}}>

 
  
<div className='bgmg3' style={{width:'100%',height:'100%',position:"absolute",left:0,bottom:0,top:0}} >

 <div className='onhoverimg' style={{height:"100%",width:"100%"}}>

  
 <div className='cardcontent1' >
<h2 className='work' style={{margin:"0px"}}>Star Wars Personality Quiz</h2>
<p style={{margin:"5px 0 0 0",color:"#e31b6d",fontSize:"16px"}}>React Js/Node Js/SQL</p>
</div>


<div className='cardcontent'>

<button className='learnmorework' style={{fontWeight:"300"}}>LEARN MORE</button>
</div>



</div>
</div>


</div>


</div>
          
            <div className={`${this.state.all == 'all'? 'activediv' : this.state.all =='js'? 'activedivjs': 'inactivediv'}`}>

        
 <div className='cardclass' style={{position:"relative",width:"390px",height:"300px"}}>

 
 <div className='bgmg4' style={{width:'100%',height:'100%',position:"absolute",left:0,bottom:0,top:0}} >

<div className='onhoverimg' style={{height:"100%",width:"100%"}}>

 
<div className='cardcontent1' >
<h2 className='work' style={{margin:"0px"}}>Weather Dashboard</h2>
<p style={{margin:"5px 0 0 0",color:"#e31b6d",fontSize:"18px"}}>HTML/CSS/JavaScript/Jquery</p>
</div>


<div className='cardcontent'>

<button className='learnmorework' style={{fontWeight:"300"}}>LEARN MORE</button>
</div>



</div>
</div>
</div>


        </div>
         
   
             <div className={`${this.state.all == 'all'? 'activediv' : this.state.all =='node'? 'node1active' : 'inactivediv'}`}>

      
 <div className='cardclass' style={{position:"relative",width:"390px",height:"300px"}}>

 
  
<div className='bgmg5' style={{width:'100%',height:'100%',position:"absolute",left:0,bottom:0,top:0}} >

 <div className='onhoverimg' style={{height:"100%",width:"100%"}}>

  
 <div className='cardcontent1' >
<h2 className='work' style={{margin:"0px"}}>Employee Management CLI</h2>
<p style={{margin:"5px 0 0 0",color:"#e31b6d",fontSize:"18px"}}>Node Js</p>
</div>


<div className='cardcontent'>

<button className='learnmorework' style={{fontWeight:"300"}}>LEARN MORE</button>
</div>



</div>
</div>


</div>


    </div>

        <div className={`${this.state.all == 'all'? 'activediv' : this.state.all =='js'? 'activedivjs2': 'inactivediv'}`}>

 
        <div className='cardclass' style={{position:"relative",width:"390px",height:"300px"}}>

 
  
<div className='bgmg6' style={{width:'100%',height:'100%',position:"absolute",left:0,bottom:0,top:0}} >

 <div className='onhoverimg' style={{height:"100%",width:"100%"}}>

  
 <div className='cardcontent1' >
<h2 className='work' style={{margin:"0px"}}>NoteBoook</h2>
<p style={{margin:"5px 0 0 0",color:"#e31b6d",fontSize:"18px"}}>HTML/CSS/JavaScript/Jquery</p>
</div>


<div className='cardcontent'>

<button className='learnmorework' style={{fontWeight:"300"}}>LEARN MORE</button>
</div>



</div>
</div>








</div>


          </div>  
     
     
          <div className={`${this.state.all == 'all'? 'activediv' : this.state.all=='js'? 'activedivjs3': 'inactivediv'}`}>

  
 <div className='cardclass' style={{position:"relative",width:"390px",height:"300px"}}>

 
  
<div className='bgmg7' style={{width:'100%',height:'100%',position:"absolute",left:0,bottom:0,top:0}} >

 <div className='onhoverimg' style={{height:"100%",width:"100%"}}>

  
 <div className='cardcontent1' >
<h2 className='work' style={{margin:"0px"}}>JS Quiz App</h2>
<p style={{margin:"5px 0 0 0",color:"#e31b6d",fontSize:"18px"}}>HTML/CSS/JavaScript</p>
</div>


<div className='cardcontent'>

<button className='learnmorework' style={{fontWeight:"300"}}>LEARN MORE</button>
</div>



</div>
</div>


</div>


        </div>
    
    
        <div className={`${this.state.all == 'all'? 'activediv' : this.state.all =='node'? 'node1active2' : 'inactivediv'}`}>

     
   
 <div className='cardclass' style={{position:"relative",width:"390px",height:"300px"}}>

 
  
<div className='bgmg8' style={{width:'100%',height:'100%',position:"absolute",left:0,bottom:0,top:0}} >

 <div className='onhoverimg' style={{height:"100%",width:"100%"}}>

  
 <div className='cardcontent1' >
<h2 className='work' style={{margin:"0px"}}>Github Profile Creator</h2>
<p style={{margin:"5px 0 0 0",color:"#e31b6d",fontSize:"18px"}}>Node Js</p>
</div>


<div className='cardcontent'>

<button className='learnmorework' style={{fontWeight:"300"}}>LEARN MORE</button>
</div>



</div>
</div>


</div>


  
  
  
   </div>
   
   
   
   <div className={`${this.state.all == 'all'? 'activediv' :this.state.all =='js'? 'activedivjs4': 'inactivediv'}`}>


 <div className='cardclass' style={{position:"relative",width:"390px",height:"300px"}}>

 <div className='bgmg' style={{width:'100%',height:'100%',position:"absolute",left:0,bottom:0,top:0}} >

  <div className='onhoverimg' style={{height:"100%",width:"100%"}}>

   
  <div className='cardcontent1' >
<h2 className='work' style={{margin:"0px"}}>Password Generator</h2>
<p style={{margin:"5px 0 0 0",color:"#e31b6d",fontSize:"16px"}}>HTML/CSS/JavaScript</p>
</div>


<div className='cardcontent'>
  <button onClick={()=>{this.setState({isOpen:true})}} > open modal</button>



 
 
 <Modal      
          closeTimeoutMS={500}
          style = {{overlay : {backgroundColor:'none',borderRadius:"0px"},content : { borderRadius:"0px",marginLeft:"330px",marginRight:'330px',height:"500px",padding:'0px'}}}
    isOpen={this.state.isOpen} onRequestClose={()=>{
   this.setState({isOpen:false})
 }}> 
  
  

 <div style={{padding:"0px",margin:"0px",boxSizing:'border-box'}}>
 <div className='carousel-container'>
   <div className='carousel-slide'>
     <img   src={pic3}/>
     <img   src={pic3}/>
     <img   src={pic3}/>
     <img   src={pic3}/>
     <img   src={pic3}/>

   </div>
 </div>
 <button id='nextBtn'>Next</button>
 <button id='prevBtn'>Prev</button>
 <button onClick={()=>{
  this.setState({isOpen:false})
}}>close</button>
 </div>
 
 </Modal>
 


<button className='learnmorework' style={{fontWeight:"300"}}>LEARN MORE</button>
</div>



</div>


</div>


</div>

   

</div>
           
        
        
        
          </div>
         
 

         
      </Segment>
 
     
   
     
      <div className='contact-me'>
        <div style={{width:"100%",height:"100%",backgroundColor:"rgba(46,51,71,.88)"}}>
        <Grid divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column>

<img src={pngitem} style={{width:"500px",height:"500px",marginTop:"50px",opacity:.8}} />

      </Grid.Column>
      <Grid.Column>
   
        <h2 className='work' style={{color:"white",textAlign:"left"}}>  Lets make something special</h2>
      <p className='work' style={{fontWeight:"300",textAlign:"left",fontSize:"17px",color:"white"}}>Have a question? We’re here to help. Send us a message <br></br> and we’ll get be in touch.</p>
 
      <Grid divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column>
      <div style={{display:"flex",justifyContent:"flex-start",flexDirection:"column"}}>
        <p className='work' style={{fontWeight:"300",fontSize:"17px",color:"white",textAlign:"left"}}>Name</p>

<input style={{borderTop:'none',borderLeft:"none",borderRight:"none",borderBottom:'1px solid white',backgroundColor:"transparent",outline:"none",width:"300px"}}/>  
        </div>     </Grid.Column>
      <Grid.Column>
        <div style={{display:"flex",justifyContent:"flex-start",flexDirection:"column"}}>
        <p className='work' style={{fontWeight:"300",fontSize:"17px",color:"white",textAlign:"left"}}>Email</p>

<input style={{borderTop:'none',borderLeft:"none",borderRight:"none",borderBottom:'1px solid white',backgroundColor:"transparent",outline:"none",width:"300px"}}/>  
        </div>
         </Grid.Column>
    </Grid.Row>
    </Grid>


  

 
      
      </Grid.Column>
    </Grid.Row>
    </Grid>
        </div>
      </div>
    </div>
    );
  }
}









{/* 
          <Grid>
            <Grid.Column width={7} style={{ padding: '0px 0 0 0' }}>
 

  <div >
  <Image
              
                src={pic}
                id='image'

                size="medium"
                circular
                verticalAlign="top"
                style={{ margin: '0px 0 0 0', padding: '0px 0 0 0' }}
              />
  </div>
             

 
            </Grid.Column>
            <Grid.Column width={9}>
                
 <div     
   id='introparagraph'
>

 
              <p
                style={{
                  textAlign: 'left',
                  fontSize: '16px',
                  fontWeight: '200',
                }}
                className="txt-2"
              >
                Hello, I'm a creative and super ambitious professional with a
                vast array of knowledge in many different front end and back
                end languages, responsive frameworks, databases, and best code
                practices aimed at delivering expected and promised results. I
                utilize unique strategies and approaches while working
                tirelessly around the clock to provide a satisfying result. I
                was formerly an account manager providing technical support
                for clients and helping non-profits, charities, and churches
                gain access to technology tools, and I quickly learned that
                the demand for software developers is exceeding supply.
              </p>
              <p
                style={{
                  textAlign: 'left',
                  fontSize: '16px',
                  fontWeight: '200',
                }}
                className="txt-2"
              >
                My primary focus of study at San Francisco State University
                was business administration, where I have been active in
                collaborating with teams to build business applications from
                the users end and working as a part time web developer. I have
                established a profound knowledge in React, Node.js,
                JavaScript, JQuery, MySQL, HTML, CSS3, Typescript, MongoDB and
                cultivated strong working relationships with diverse employees
                and types of clients.
              </p>

              <p
                style={{
                  textAlign: 'left',
                  fontSize: '16px',
                  fontWeight: '200',
                  margin: '0 0 50px 0',
                }}
                className="txt-2"
              >
                Most Recently earned a certificate in full stack web
                development from the University of California, Berkeley. known
                as an innovative critical thinker that enjoys solving problems
                and passionate about developing full stack applications. With
                each project, my aim is to introduce efficient solutions to
                users and engage my audience for an impactful user experience.
                I’m excited to leverage my skills as part of a fast-paced,
                quality-driven team to build better experiences on the web.
              </p>
              </div>
              <a href={Resume} target="_blank" rel="noopener noreferrer">
                <Button
                  style={{ backgroundColor: '#8b5eb4', color: 'white' }}
                  size="large"
                >
                  View my resume.
                </Button>
              </a>
            </Grid.Column>
          </Grid> */}




