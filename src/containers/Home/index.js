import React, { Component } from 'react';
import './../../index.css';
import {
  Container,
  Header,
  Button,
  Grid,
  Segment,
  Image,
  Icon,
  Item
} from 'semantic-ui-react';
import Nav from './../../components/nav/index'
import icon1image from './../../components/Images/icon1.jpg'
import icon2image from './../../components/Images/icon2.jpg'
import icon3image from './../../components/Images/icon3.jpg'
import icon4image from './../../components/Images/icon4.jpg'
  import { debounce, over } from 'lodash';
import pic from './../../components/Images/snow.jpg';
import pngitem from './../../components/Images/pngitem.png'
import modalshot1 from './../../components/Images/modalshot1.png'
import modalshot2 from './../../components/Images/modalshot2.png'
import modalshot3 from './../../components/Images/modalshot3.png'
import modalshot4 from './../../components/Images/modalshot4.png'
import modalshot5 from './../../components/Images/modalshot5.png'
 import modalshot7 from './../../components/Images/modalshot7.png'
import modalshot8 from './../../components/Images/employee-tracker.png'
import modalshot9 from './../../components/Images/modalshot9.png'
 import modalshot10 from './../../components/Images/modalshot10.png'
 import modalshot11 from './../../components/Images/modalshot11.png'
 import modalshot12 from './../../components/Images/modalshot12.png'
 import modalshot13 from './../../components/Images/modalshot13.png'
 import clickhere from './../../components/Images/click.png'
 import AosScroll from './../Aos';
import 'aos/dist/aos.css';
 



export default class Home extends Component {

  state = {
    all : 'all',
    express: '',
    react: '',
    js: '',
    isOpen:false,
    x: 0,
    x2:0,
    x3: 0,
    x4:0,
    x5: 0,
    x6:0,
    x7: 0,
    x8:0,
    x9: 0,
    topElemenent:'topEl',
    aboutElemenent:'aboutEl',
    portfolioElemenent:'portfolioEl',
    contactElemenent:'contactEl'

    
   }
  componentDidMount = () => {
    const btns = document.querySelectorAll('[data-target]');
    const overlay = document.getElementById('overlay')
    const overlay1 = document.getElementById('overlay1')
    const overlay2 = document.getElementById('overlay2')
    const overlay3 = document.getElementById('overlay3')
    const overlay4 = document.getElementById('overlay4')
    const overlay5 = document.getElementById('overlay5')
    const overlay6 = document.getElementById('overlay6')
    const overlay7 = document.getElementById('overlay7')
    const overlay8 = document.getElementById('overlay8')
    const overlay9 = document.getElementById('overlay9')

    btns.forEach((item)=>{
      item.addEventListener('click',()=>{
        document.querySelector(item.dataset.target).classList.add('on')
        overlay.classList.add('on')
      })
    })

     
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
    const gallary = document.getElementById('gallaryimage1')
    const gallary2 = document.getElementById('gallaryimage2')
    const gallary3 = document.getElementById('gallaryimage3')
    const gallary4 = document.getElementById('gallaryimage4')
    const gallary5 = document.getElementById('gallaryimage5')
    const gallary6 = document.getElementById('gallaryimage6')
    const gallary7 = document.getElementById('gallaryimage7')
    const gallary8 = document.getElementById('gallaryimage8')
    const gallary9 = document.getElementById('gallaryimage9')

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
      gallary.classList.add('already-on-page')
      gallary2.classList.add('already-on-page')
      gallary3.classList.add('already-on-page')
      gallary4.classList.add('already-on-page')
      gallary5.classList.add('already-on-page')
      gallary6.classList.add('already-on-page')
      gallary7.classList.add('already-on-page')
      gallary8.classList.add('already-on-page')
      gallary9.classList.add('already-on-page')

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
      gallary.classList.add('not-on-page')
      gallary2.classList.add('not-on-page')
      gallary3.classList.add('not-on-page')
      gallary4.classList.add('not-on-page')
      gallary5.classList.add('not-on-page')
      gallary6.classList.add('not-on-page')
      gallary7.classList.add('not-on-page')
      gallary8.classList.add('not-on-page')
      gallary9.classList.add('not-on-page')


    }

    const scrollFunction = (e) => {
    
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
    const heightlessthen1400 = top<window.innerHeight -2150

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

        if(heightlessthen1400 && gallary.classList.contains('not-on-page')){
          gallary.classList.add('gallaryfadeup')
          gallary2.classList.add('gallaryfadeup2')
          gallary3.classList.add('gallaryfadeup3')
          gallary4.classList.add('gallaryfadeup4')
          gallary5.classList.add('gallaryfadeup5')
          gallary6.classList.add('gallaryfadeup6')
          gallary7.classList.add('gallaryfadeup7')
          gallary8.classList.add('gallaryfadeup8')
          gallary9.classList.add('gallaryfadeup9')

        }

    }


    window.addEventListener('scroll' , (scrollFunction))

     window.addEventListener('click',(e)=>{
        if(e.target == overlay || e.target == overlay1 || e.target == overlay2 || e.target == overlay3
          || e.target == overlay4 || e.target == overlay5 || e.target == overlay6 || e.target == overlay7 || e.target == overlay8
          || e.target == overlay9)  {
 
         const allmodals = document.querySelectorAll('.mask-rap')
         allmodals.forEach((item)=>{
           item.classList.remove('on')
           overlay.classList.remove('on')
           overlay1.classList.remove('on')
           overlay2.classList.remove('on')
           overlay3.classList.remove('on')
           overlay4.classList.remove('on')
           overlay5.classList.remove('on')
           overlay6.classList.remove('on')
           overlay7.classList.remove('on')
           overlay8.classList.remove('on')
 
 
         })
        }
      })

  }
 
    
  
 
  render() {

     
  const sliderArray = [
    {image:`${modalshot1}`},{image:`${modalshot2}`},{image:`${modalshot3}`}
]
 
const sliderArray2 = [
  {image:`${modalshot4}`}
]

const sliderArray3 = [
 {image:`${modalshot5}`}
]

const sliderArray4 = [
  {image:`${modalshot7}`}
 ]

 const sliderArray5 = [
  {image:`${modalshot8}`}
 ]

 const sliderArray6 = [
  {image:`${modalshot10}`}
 ]

 const sliderArray7 = [
  {image:`${modalshot11}`}
 ]
   
 const sliderArray8 = [
  {image:`${modalshot12}`}
 ]
 const sliderArray9 = [
  {image:`${modalshot13}`}
 ]

     const goLeft = () => {
 
      this.state.x === 0? this.setState({x:-100 * (sliderArray.length -1)})
      : this.setState({x:this.state.x + 100})    

      this.state.x2 === 0? this.setState({x2:-100 * (sliderArray2.length -1)})
      : this.setState({x2:this.state.x2 + 100})  
      
      this.state.x3 === 0? this.setState({x3:-100 * (sliderArray3.length -1)})
      : this.setState({x2:this.state.x3 + 100})  

      this.state.x4 === 0? this.setState({x4:-100 * (sliderArray4.length -1)})
      : this.setState({x2:this.state.x4 + 100})  

      this.state.x5 === 0? this.setState({x5:-100 * (sliderArray5.length -1)})
      : this.setState({x2:this.state.x5 + 100})  

      this.state.x6 === 0? this.setState({x6:-100 * (sliderArray6.length -1)})
      : this.setState({x2:this.state.x6 + 100})  

      this.state.x7 === 0? this.setState({x7:-100 * (sliderArray7.length -1)})
      : this.setState({x2:this.state.x7 + 100})  

      this.state.x8 === 0? this.setState({x8:-100 * (sliderArray8.length -1)})
      : this.setState({x2:this.state.x8 + 100})  

      this.state.x9 === 0? this.setState({x9:-100 * (sliderArray9.length -1)})
      : this.setState({x2:this.state.x9 + 100})  
    
    }

    const goRight = () => {
       this.state.x === -100 * (sliderArray.length -1) ? this.setState({x:0})
      : this.setState({x:this.state.x -100})
     this.state.x2 === -100 * (sliderArray2.length -1) ? this.setState({x2:0})
      : this.setState({x2:this.state.x2 -100})
      this.state.x3 === -100 * (sliderArray3.length -1) ? this.setState({x3:0})
      : this.setState({x3:this.state.x3 -100})
      this.state.x4 === -100 * (sliderArray4.length -1) ? this.setState({x4:0})
      : this.setState({x4:this.state.x4 -100})
      this.state.x5 === -100 * (sliderArray5.length -1) ? this.setState({x5:0})
      : this.setState({x5:this.state.x5 -100})
      this.state.x6 === -100 * (sliderArray6.length -1) ? this.setState({x6:0})
      : this.setState({x6:this.state.x6 -100})
      this.state.x7 === -100 * (sliderArray7.length -1) ? this.setState({x7:0})
      : this.setState({x7:this.state.x7 -100})
      this.state.x8 === -100 * (sliderArray8.length -1) ? this.setState({x8:0})
      : this.setState({x8:this.state.x8 -100})
      this.state.x9 === -100 * (sliderArray9.length -1) ? this.setState({x9:0})
      : this.setState({x9:this.state.x9 -100})
     }

    return (
    <div>


<div id='modal11' 
className='mask-rap'
>
<div className='mask' id='overlay'>

</div>
<div className='modal1' style={{maxWidth:"700px",height:"680px"}}>
  

<div class="slider">
  {sliderArray.map((item,index)=>{
    return(
      <div class="slide" style={{transform:`translateX(${this.state.x}%)`}} >

       <div style={{width:"100%",height:"100%",backgroundImage:`url(${item.image})`,backgroundSize:"cover",backgroundPosition:"center"}}>
          </div>

              </div>
    )
  })}
 

      <div onClick={goLeft} style={{position:'absolute',bottom:'0',color:"white",cursor:'pointer',padding:"15px 30px 15px 30px",backgroundColor:"rgba(0,0,0,.4)"}}>
    <i style={{fontSize:"20px"}} class="fas fa-chevron-left"></i>
    </div>
    <div onClick={goRight} style={{position:'absolute',bottom:'0',color:"white",cursor:'pointer',padding:"15px 30px 15px 30px",right:'0',backgroundColor:"rgba(0,0,0,.4)"}}>
    <i style={{fontSize:"20px"}} class="fas fa-chevron-right"></i>
    </div> 
  </div>
 

   <div style={{borderTop:"3px solid black",padding:'35px 0 0 20px'}}>
<h1 style={{color:"#616161",margin:"0px",fontSize:"28px"}} className='work'>Stock Tracker</h1>
<h1 className='work5'>Personal Finances Organizer </h1>
<p className='poppins4' style={{marginTop:"15px",fontSize:"16px",color:"#444",fontWeight:"300",paddingRight:"20px"}}>
  The Stock Tracking Application, a platform where users can save and track trending stocks in the market. There is also a mobile version,
  built using React Native. 
</p>
  
  
  <div style={{marginTop:"10px"}}>
 <a href='https://stocktracker10for10.herokuapp.com/' target='_blank'>

  <button className='btn learnmorework2' data-target='#modal11' style={{fontWeight:"bold"}}>
    
  <i class="fas fa-external-link-alt" style={{marginRight:"9px",fontSize:'12px'}}></i>

   
     VIEW SITE
     
     </button>
</a>
  </div>
   </div>
 
 </div>
</div>
  
 
 

<div id='modal12' 
className='mask-rap'
>
<div className='mask' id='overlay1'>

</div>
<div className='modal1' style={{maxWidth:"700px",height:"680px"}}>
  

<div class="slider">
  {sliderArray2.map((item,index)=>{
    return(
      <div class="slide" style={{transform:`translateX(${this.state.x2}%)`}} >

       <div style={{width:"100%",height:"100%",backgroundImage:`url(${item.image})`,backgroundSize:"cover",backgroundPosition:"center"}}>
          </div>

              </div>
    )
  })}
 

      {/* <div onClick={goLeft} style={{position:'absolute',bottom:'0',color:"white",padding:"15px 30px 15px 30px",backgroundColor:"rgba(0,0,0,.4)"}}>
    <i style={{fontSize:"20px"}} class="fas fa-chevron-left"></i>
    </div>
    <div onClick={goRight} style={{position:'absolute',bottom:'0',color:"white",padding:"15px 30px 15px 30px",right:'0',backgroundColor:"rgba(0,0,0,.4)"}}>
    <i style={{fontSize:"20px"}} class="fas fa-chevron-right"></i>
    </div>  */}
  </div>
 

   <div style={{borderTop:"3px solid black",padding:'35px 0 0 20px'}}>
<h1 style={{color:"#616161",margin:"0px",fontSize:"28px"}} className='work'>Learning Made Eazy</h1>
<h1 className='work5'>Online Learning </h1>
<p className='poppins4' style={{marginTop:"15px",fontSize:"16px",color:"#444",fontWeight:"300",paddingRight:"20px"}}>
  A user friendly and convenient admin application for teachers and Students
   that comes with a diverse collection of academic content.
 
  
  </p>
   
<div style={{marginTop:"10px"}}>
  <a href='https://learningmadeeazy.herokuapp.com/' target='_blank'>
  <button className='btn learnmorework2' data-target='#modal11' style={{fontWeight:"bold"}}>
  <i class="fas fa-external-link-alt" style={{marginRight:"9px",fontSize:'12px'}}></i>

     VIEW SITE</button>
</a>
  </div>
   
   </div>
 




 </div>
</div>
  
 
 
<div id='modal13' 
className='mask-rap'
>
<div className='mask' id='overlay2'>

</div>
<div className='modal1' style={{maxWidth:"700px",height:"680px"}}>
  

<div class="slider">
  {sliderArray3.map((item,index)=>{
    return(
      <div class="slide" style={{transform:`translateX(${this.state.x3}%)`}} >

       <div style={{width:"100%",height:"100%",backgroundImage:`url(${item.image})`,backgroundSize:"cover",backgroundPosition:"center"}}>
          </div>

              </div>
    )
  })}
 

      {/* <div onClick={goLeft} style={{position:'absolute',bottom:'0',color:"white",padding:"15px 30px 15px 30px",backgroundColor:"rgba(0,0,0,.4)"}}>
    <i style={{fontSize:"20px"}} class="fas fa-chevron-left"></i>
    </div>
    <div onClick={goRight} style={{position:'absolute',bottom:'0',color:"white",padding:"15px 30px 15px 30px",right:'0',backgroundColor:"rgba(0,0,0,.4)"}}>
    <i style={{fontSize:"20px"}} class="fas fa-chevron-right"></i>
    </div>  */}
  </div>
 

   <div style={{borderTop:"3px solid black",padding:'35px 0 0 20px'}}>
<h1 style={{color:"#616161",margin:"0px",fontSize:"28px"}} className='work'>Star Wars Personality Quiz</h1>
<h1 className='work5'>Interactive quiz </h1>
<p className='poppins4' style={{marginTop:"15px",fontSize:"16px",color:"#444",fontWeight:"300",paddingRight:"20px"}}>
  An application for Star Wars enthusiasts who are interested in discovering which characters they resemble the most
  based on a given set of questions. 
   </p>
<div style={{marginTop:"10px"}}>

  <a href='https://thejedicode.herokuapp.com/' target='_blank'>
  <button className='btn learnmorework2' data-target='#modal11' style={{fontWeight:"bold"}}>
  <i class="fas fa-external-link-alt" style={{marginRight:"9px",fontSize:'12px'}}></i>

     VIEW SITE</button>
     </a>

  </div>
   </div>
 
 </div>
</div>
  
 
<div id='modal14' 
className='mask-rap'
>
<div className='mask' id='overlay3'>

</div>
<div className='modal1' style={{maxWidth:"700px",height:"680px"}}>
  

<div class="slider">
  {sliderArray4.map((item,index)=>{
    return(
      <div class="slide" style={{transform:`translateX(${this.state.x4}%)`}} >

       <div style={{width:"100%",height:"100%",backgroundImage:`url(${item.image})`,backgroundSize:"cover",backgroundPosition:"center"}}>
          </div>

              </div>
    )
  })}
 

      {/* <div onClick={goLeft} style={{position:'absolute',bottom:'0',color:"white",padding:"15px 30px 15px 30px",backgroundColor:"rgba(0,0,0,.4)"}}>
    <i style={{fontSize:"20px"}} class="fas fa-chevron-left"></i>
    </div>
    <div onClick={goRight} style={{position:'absolute',bottom:'0',color:"white",padding:"15px 30px 15px 30px",right:'0',backgroundColor:"rgba(0,0,0,.4)"}}>
    <i style={{fontSize:"20px"}} class="fas fa-chevron-right"></i>
    </div>  */}
  </div>
 

   <div style={{borderTop:"3px solid black",padding:'35px 0 0 20px'}}>
<h1 style={{color:"#616161",margin:"0px",fontSize:"28px"}} className='work'>Weather Dashboard</h1>
<h1 className='work5'>Javascript Functionality </h1>
<p className='poppins4' style={{marginTop:"15px",fontSize:"16px",color:"#444",fontWeight:"300",paddingRight:"20px"}}>
  A Weather Dashboard that gives users weather forecast for the upcoming week in any city.
    </p>
   
<div style={{marginTop:"10px"}}>
  <button className='btn learnmorework2' data-target='#modal11' style={{fontWeight:"bold"}}>
  <i class="fas fa-external-link-alt" style={{marginRight:"9px",fontSize:'12px'}}></i>

     VIEW SITE</button>

  </div>
   </div>
 
 </div>
</div>
  
 
<div id='modal15' 
className='mask-rap'
>
<div className='mask' id='overlay4'>

</div>
<div className='modal1' style={{maxWidth:"700px",height:"680px"}}>
  

<div class="slider">
  {sliderArray5.map((item,index)=>{
    return(
      <div class="slide" style={{transform:`translateX(${this.state.x5}%)`}} >

       <div style={{width:"100%",height:"100%",backgroundImage:`url(${item.image})`,backgroundSize:"cover",backgroundPosition:"center"}}>
          </div>

              </div>
    )
  })}
 

      {/* <div onClick={goLeft} style={{position:'absolute',bottom:'0',color:"white",padding:"15px 30px 15px 30px",backgroundColor:"rgba(0,0,0,.4)"}}>
    <i style={{fontSize:"20px"}} class="fas fa-chevron-left"></i>
    </div>
    <div onClick={goRight} style={{position:'absolute',bottom:'0',color:"white",padding:"15px 30px 15px 30px",right:'0',backgroundColor:"rgba(0,0,0,.4)"}}>
    <i style={{fontSize:"20px"}} class="fas fa-chevron-right"></i>
    </div>  */}
  </div>
 

   <div style={{borderTop:"3px solid black",padding:'35px 0 0 20px'}}>
<h1 style={{color:"#616161",margin:"0px",fontSize:"28px"}} className='work'>Employee Tracker</h1>
<h1 className='work5'>NodeJs CLI </h1>
<p className='poppins4' style={{marginTop:"15px",fontSize:"16px",color:"#444",fontWeight:"300",paddingRight:"20px"}}>
  
A software engineering team generator command line application that prompts
 the user for information about the team manager and information about
 the team members. The user may inquire about members and input new ones.
  </p>
<div style={{marginTop:"10px"}}>
  <button className='btn learnmorework2' data-target='#modal11' style={{fontWeight:"bold"}}>
  <i class="fas fa-external-link-alt" style={{marginRight:"9px",fontSize:'12px'}}></i>

     VIEW SITE</button>

  </div>
   
   </div>
 
 </div>
</div>
  
 
<div id='modal16' 
className='mask-rap'
>
<div className='mask' id='overlay5'>

</div>
<div className='modal1' style={{maxWidth:"700px",height:"680px"}}>
  

<div class="slider">
  {sliderArray6.map((item,index)=>{
    return(
      <div class="slide" style={{transform:`translateX(${this.state.x6}%)`}} >

       <div style={{width:"100%",height:"100%",backgroundImage:`url(${item.image})`,backgroundSize:"cover",backgroundPosition:"top"}}>
          </div>

              </div>
    )
  })}
 

      {/* <div onClick={goLeft} style={{position:'absolute',bottom:'0',color:"white",padding:"15px 30px 15px 30px",backgroundColor:"rgba(0,0,0,.4)"}}>
    <i style={{fontSize:"20px"}} class="fas fa-chevron-left"></i>
    </div>
    <div onClick={goRight} style={{position:'absolute',bottom:'0',color:"white",padding:"15px 30px 15px 30px",right:'0',backgroundColor:"rgba(0,0,0,.4)"}}>
    <i style={{fontSize:"20px"}} class="fas fa-chevron-right"></i>
    </div>  */}
  </div>
 

   <div style={{borderTop:"3px solid black",padding:'35px 0 0 20px'}}>
<h1 style={{color:"#616161",margin:"0px",fontSize:"28px"}} className='work'>NoteBook Application</h1>
<h1 className='work5'>Javascript Functionality </h1>
<p className='poppins4' style={{marginTop:"15px",fontSize:"16px",color:"#444",fontWeight:"300",paddingRight:"20px"}}>
An application that can be used to write, save, and delete notes. This application uses
 an express backend to save and retrieve note data from a JSON file.
   </p>
<div style={{marginTop:"10px"}}>
  <button className='btn learnmorework2' data-target='#modal11' style={{fontWeight:"bold"}}>
  <i class="fas fa-external-link-alt" style={{marginRight:"9px",fontSize:'12px'}}></i>

     VIEW SITE</button>

  </div>
   </div>
 
 </div>
</div>
  
 
<div id='modal17' 
className='mask-rap'
>
<div className='mask' id='overlay6'>

</div>
<div className='modal1' style={{maxWidth:"700px",height:"680px"}}>
  

<div class="slider">
  {sliderArray7.map((item,index)=>{
    return(
      <div class="slide" style={{transform:`translateX(${this.state.x7}%)`}} >

       <div style={{width:"100%",height:"100%",backgroundImage:`url(${item.image})`,backgroundSize:"cover",backgroundPosition:"center"}}>
          </div>

              </div>
    )
  })}
 

      {/* <div onClick={goLeft} style={{position:'absolute',bottom:'0',color:"white",padding:"15px 30px 15px 30px",backgroundColor:"rgba(0,0,0,.4)"}}>
    <i style={{fontSize:"20px"}} class="fas fa-chevron-left"></i>
    </div>
    <div onClick={goRight} style={{position:'absolute',bottom:'0',color:"white",padding:"15px 30px 15px 30px",right:'0',backgroundColor:"rgba(0,0,0,.4)"}}>
    <i style={{fontSize:"20px"}} class="fas fa-chevron-right"></i>
    </div>  */}
  </div>
 

   <div style={{borderTop:"3px solid black",padding:'35px 0 0 20px'}}>
<h1 style={{color:"#616161",margin:"0px",fontSize:"28px"}} className='work'>Code Quiz</h1>
<h1 className='work5'>Javascript Functionality </h1>
<p className='poppins4' style={{marginTop:"15px",fontSize:"16px",color:"#444",fontWeight:"300",paddingRight:"20px"}}>
A code quiz with multiple-choice questions that runs in the browser and feature 
dynamically updated HTML & CSS powered with JavaScript code. It also features a clean and polished 
user interface that's responsive, ensuring that it adapts to multiple screen sizes.
 
    </p>
   
<div style={{marginTop:"10px"}}>
  <button className='btn learnmorework2' data-target='#modal11' style={{fontWeight:"bold"}}>
  <i class="fas fa-external-link-alt" style={{marginRight:"9px",fontSize:'12px'}}></i>

     VIEW SITE</button>

  </div>
   </div>
 
 </div>
</div>
  
 
<div id='modal18' 
className='mask-rap'
>
<div className='mask' id='overlay7'>

</div>
<div className='modal1' style={{maxWidth:"700px",height:"680px"}}>
  

<div class="slider">
  {sliderArray8.map((item,index)=>{
    return(
      <div class="slide" style={{transform:`translateX(${this.state.x8}%)`}} >

       <div style={{width:"100%",height:"100%",backgroundImage:`url(${item.image})`,backgroundSize:"cover",backgroundPosition:"bottom"}}>
          </div>

              </div>
    )
  })}
 

      {/* <div onClick={goLeft} style={{position:'absolute',bottom:'0',color:"white",padding:"15px 30px 15px 30px",backgroundColor:"rgba(0,0,0,.4)"}}>
    <i style={{fontSize:"20px"}} class="fas fa-chevron-left"></i>
    </div>
    <div onClick={goRight} style={{position:'absolute',bottom:'0',color:"white",padding:"15px 30px 15px 30px",right:'0',backgroundColor:"rgba(0,0,0,.4)"}}>
    <i style={{fontSize:"20px"}} class="fas fa-chevron-right"></i>
    </div>  */}
  </div>
 

   <div style={{borderTop:"3px solid black",padding:'35px 0 0 20px'}}>
<h1 style={{color:"#616161",margin:"0px",fontSize:"28px"}} className='work'>Github Profile Creator</h1>
<h1 className='work5'>CLI PDF generator </h1>
<p className='poppins4' style={{marginTop:"15px",fontSize:"16px",color:"#444",fontWeight:"300"}}>
A command-line application that dynamically generates a PDF profile from a GitHub username</p>
<div style={{marginTop:"10px"}}>


  <button className='btn learnmorework2' data-target='#modal11' style={{fontWeight:"bold"}}>
  <i class="fas fa-external-link-alt" style={{marginRight:"9px",fontSize:'12px'}}></i>

     VIEW SITE</button>

  </div>
   </div>
 
 </div>
</div>
  
 
<div id='modal19' 
className='mask-rap'
>
<div className='mask' id='overlay8'>

</div>
<div className='modal1' style={{maxWidth:"700px",height:"710px"}}>
  

<div class="slider">
  {sliderArray9.map((item,index)=>{
    return(
      <div class="slide" style={{transform:`translateX(${this.state.x9}%)`}} >

       <div style={{width:"100%",height:"100%",backgroundImage:`url(${item.image})`,backgroundSize:"cover",backgroundPosition:"center"}}>
          </div>

              </div>
    )
  })}
 

      {/* <div onClick={goLeft} style={{position:'absolute',bottom:'0',color:"white",padding:"15px 30px 15px 30px",backgroundColor:"rgba(0,0,0,.4)"}}>
    <i style={{fontSize:"20px"}} class="fas fa-chevron-left"></i>
    </div>
    <div onClick={goRight} style={{position:'absolute',bottom:'0',color:"white",padding:"15px 30px 15px 30px",right:'0',backgroundColor:"rgba(0,0,0,.4)"}}>
    <i style={{fontSize:"20px"}} class="fas fa-chevron-right"></i>
    </div>  */}
  </div>
 

   <div style={{borderTop:"3px solid black",padding:'35px 0 0 20px'}}>
<h1 style={{color:"#616161",margin:"0px",fontSize:"28px"}} className='work'>Password Generator</h1>
<h1 className='work5'>Javascript Functionality </h1>
<p className='poppins4' style={{marginTop:"15px",fontSize:"16px",color:"#444",fontWeight:"300"}}>
An application that generates a random password based on user-selected criteria. This app will run in 
the browser and feature dynamically updated HTML and CSS powered by JavaScript code. 
It also features a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.
  </p>
   
<div style={{marginTop:"10px"}}>


<button className='btn learnmorework2' data-target='#modal11' style={{fontWeight:"bold"}}>
<i class="fas fa-external-link-alt" style={{marginRight:"9px",fontSize:'12px'}}></i>

   VIEW SITE</button>

</div>
   </div>
 
 </div>
</div>
  
 
 

 

        <div className="background" id='back'>
        <div className="info" id={this.state.topElemenent}>
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
       <Nav id='nav' topEl={this.state.topElemenent} contactEl={this.state.contactElemenent} aboutEl = {this.state.aboutElemenent} portfolioEl = {this.state.portfolioElemenent} />
  

   

   
     
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
<p className='poppins' id={this.state.aboutElemenent}  style={{margin:"5px 0 0 0",color:"#616161",lineHeight:'1.5',fontSize:"15px",fontWeight:"300"}}>Websites don't have to be static, I love making pages come to life.</p>
                 </div>
                </Grid.Column>
             
              </Grid.Row>
            </Grid>         </div>


        

            </Container>
 
          <Grid   >
            <Grid.Column width={8} style={{ padding: '0px 0 0 0' }}>
 

            <div  style={{display:"flex",justifyContent:"center"}}>
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
             <h2 className='work'   style={{color:"grey",margin:"0px 0 5px 0"}}>Who Am I?</h2>

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
                    <p   className="descrip" style={{ color: 'white' }}>
                      Node.js
                    </p>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <div id={this.state.portfolioElemenent} style={{marginTop:"90px"}} ></div>

           </Container>
 
        </Segment>
 
      </div>
     <div style={{backgroundColor:"#9d72c8"}}>
   
     
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    
   
    
      <Container    text>
     

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
<div style={{height:"60px",backgroundColor:"#f5f5f5"}}></div>

      <div style={{height:"150px",margin:"0px 0 0 0",display:"flex",justifyContent:"center",backgroundColor:"#f5f5f5"}}>
<div style={{display:"flex",justifyContent:'space-evenly',width:"70%",paddingTop:"55px"}}>
 
 <div className={`push`}  
 onClick={()=>{
  this.setState({all:'all'})
}}   

style={{backgroundColor:this.state.all == 'all'? "#8b5eb4" : null ,width:"100%",height:"30%",display:"flex",
alignItems:"center",justifyContent:"center",margin:"5px",
}}><p style={{color:this.state.all == 'all'? "white" : '#616161',fontSize:"20px",fontWeight:"500"}}>ALL</p> </div>

<div className={`push`} 
onClick={()=>{
  this.setState({all:'node'})
}}   

style={{width:"100%",backgroundColor:this.state.all == 'node'? "#8b5eb4" : null,height:"30%",display:"flex",alignItems:"center",justifyContent:"center",margin:"5px"}}><p style={{color:this.state.all == 'node'? "white" : '#616161',fontSize:"20px",fontWeight:"500"}}>NODE-JS/EXPRESS</p></div>

<div className={`push`} 
onClick={()=>{
  this.setState({all:'react'})
}}    

style={{width:"100%",height:"30%",display:"flex",backgroundColor:this.state.all == 'react'? "#8b5eb4" : null,alignItems:"center",justifyContent:"center",margin:"5px"}}> <p style={{color:this.state.all == 'react'? "white" : '#616161',fontSize:"20px",fontWeight:"500"}}>MERN/SQL </p> </div>

<div className={`push`} 
onClick={()=>{
  this.setState({all:'js'})
}}    style={{width:"100%",height:"30%",display:"flex",alignItems:"center",justifyContent:"center",margin:"5px",backgroundColor:this.state.all == 'js'? "#8b5eb4" : null}}><p style={{color:this.state.all == 'js'? "white" : '#616161',fontSize:"20px",fontWeight:"500"}}>JAVASCRIPT </p> </div>



 

</div>
 

      </div>

      
 
      <div style={{ padding: '0em 0 6em 0em',backgroundColor:"#f5f5f5" }} >
        
            <div className={`image-container ${this.state.all == 'all'? 'transitioneffect' : this.state.all == 'react'? 'transitioneffect2'
            : this.state.all == 'js'? 'transitioneffect3':this.state.all =='node'? 'transitioneffect1' : null}`}  >
            

 


<div  className={`${this.state.all == 'all'||this.state.all == 'react'? 'activediv' : 'inactivediv'}` }>

 <div id='gallaryimage1' >

 
<div className='yellow' >
 <div className='page'>

 
  
<div className='cardcontent1' >
<h2 className='work' style={{margin:"0px"}}>Stock Tracker </h2>
<p style={{margin:"5px 0 0 0",color:"#e31b6d",fontSize:"18px"}}>React Js / Node Js / MongoDB</p>
</div>


<div className='cardcontent'>
 
<button className='btn learnmorework' data-target='#modal11' style={{fontWeight:"300"}}>LEARN MORE</button>
</div>
</div>
</div>
 </div>
            
            </div>
   
 <div className={`${this.state.all == 'all'||this.state.all == 'react'? 'activediv' : 'inactivediv'}`}>

   <div id='gallaryimage2'  >

    
<div className='yellow1' >
 <div className='page'>

 
  
<div className='cardcontent1' >
<h2 className='work' style={{margin:"0px"}}>Learning Made Eazy </h2>
<p style={{margin:"5px 0 0 0",color:"#e31b6d",fontSize:"18px"}}>React Js / Node Js / MongoDB</p>
</div>


<div className='cardcontent'>
 
<button className='btn learnmorework' data-target='#modal12' style={{fontWeight:"300"}}>LEARN MORE</button>
</div>
</div>
</div>

</div>
          
            </div>  

 <div className={`${this.state.all == 'all'||this.state.all == 'react'? 'activediv' : 'inactivediv'}`}>

 <div id='gallaryimage3'>

<div className='yellow2' >
 <div className='page'>

 
  
<div className='cardcontent1' >
<h2 className='work' style={{margin:"0px"}}>Star Wars Personality Quiz </h2>
<p style={{margin:"5px 0 0 0",color:"#e31b6d",fontSize:"18px"}}>React Js / Node Js / SQL</p>
</div>


<div className='cardcontent'>
 
<button className='btn learnmorework' data-target='#modal13' style={{fontWeight:"300"}}>LEARN MORE</button>
</div>
</div>
</div>
</div>

</div>
          
<div className={`${this.state.all == 'all'? 'activediv' : this.state.all =='js'? 'activedivjs': 'inactivediv'}`}>
<div id='gallaryimage4'>

<div className='yellow3' >
 <div className='page'>

<div className='cardcontent1' >
<h2 className='work' style={{margin:"0px"}}>Weather Dashboard </h2>
<p style={{margin:"5px 0 0 0",color:"#e31b6d",fontSize:"18px"}}>HTML & CSS / Jquery / Javascript</p>
</div>


<div className='cardcontent'>
 
<button className='btn learnmorework' data-target='#modal14' style={{fontWeight:"300"}}>LEARN MORE</button>
</div>
</div>
</div>
  </div>
   
        </div>
         
   
             <div className={`${this.state.all == 'all'? 'activediv' : this.state.all =='node'? 'node1active' : 'inactivediv'}`}>

             <div id='gallaryimage5'>
<div className='yellow4' >
 <div className='page'>

 
  
<div className='cardcontent1' >
<h2 className='work' style={{margin:"0px"}}>Employee Directory CLI </h2>
<p style={{margin:"5px 0 0 0",color:"#e31b6d",fontSize:"18px"}}>Node Js</p>
</div>


<div className='cardcontent'>
 
<button className='btn learnmorework' data-target='#modal15' style={{fontWeight:"300"}}>LEARN MORE</button>
</div>
</div>
</div>
  
   </div>

    </div>

        <div className={`${this.state.all == 'all'? 'activediv' : this.state.all =='js'? 'activedivjs2': 'inactivediv'}`}>

        <div id='gallaryimage6'>
 
<div className='yellow5' >
 <div className='page'>

 
  
<div className='cardcontent1' >
<h2 className='work' style={{margin:"0px"}}>Notebook Reminder </h2>
<p style={{margin:"5px 0 0 0",color:"#e31b6d",fontSize:"18px"}}>HTML & CSS / Jquery / Javascript</p>
</div>


<div className='cardcontent'>
 
<button className='btn learnmorework' data-target='#modal16' style={{fontWeight:"300"}}>LEARN MORE</button>
</div>
</div>
</div>
  
</div>

          </div>  
     
     
          <div className={`${this.state.all == 'all'? 'activediv' : this.state.all=='js'? 'activedivjs3': 'inactivediv'}`}>

          <div id='gallaryimage7'>

<div className='yellow6' >
 <div className='page'>

 
  
<div className='cardcontent1' >
<h2 className='work' style={{margin:"0px"}}>Quiz App </h2>
<p style={{margin:"5px 0 0 0",color:"#e31b6d",fontSize:"18px"}}>HTML & CSS / Jquery / Javascript</p>
</div>


<div className='cardcontent'>
 
<button className='btn learnmorework' data-target='#modal17' style={{fontWeight:"300"}}>LEARN MORE</button>
</div>
</div>
</div>
     
</div>
        </div>
    
    
        <div className={`${this.state.all == 'all'? 'activediv' : this.state.all =='node'? 'node1active2' : 'inactivediv'}`}>
        <div id='gallaryimage8'>

      
<div className='yellow7' >
 <div className='page'>

 
  
<div className='cardcontent1' >
<h2 className='work' style={{margin:"0px"}}>Github Profile Creator </h2>
<p style={{margin:"5px 0 0 0",color:"#e31b6d",fontSize:"18px"}}>HTML & CSS / Jquery / Javascript</p>
</div>


<div className='cardcontent'>
 
<button className='btn learnmorework' data-target='#modal18' style={{fontWeight:"300"}}>LEARN MORE</button>
</div>
</div>
</div>
     
  
  </div>
  
   </div>
   
   
   
   <div className={`${this.state.all == 'all'? 'activediv' :this.state.all =='js'? 'activedivjs4': 'inactivediv'}`}>

   <div id='gallaryimage9'>

   <div className='yellow8' >
 <div className='page'>

 
  
<div className='cardcontent1' >
<h2 className='work' style={{margin:"0px"}}>Password Generator </h2>
<p style={{margin:"5px 0 0 0",color:"#e31b6d",fontSize:"18px"}}>HTML & CSS / Jquery / Javascript</p>
</div>


<div className='cardcontent'>
 
<button className='btn learnmorework' data-target='#modal19' style={{fontWeight:"300"}}>LEARN MORE</button>
</div>
</div>
</div>
  </div>

</div>
           
 
     
        
          </div>
         
          <div id={this.state.contactElemenent} style={{marginBottom:"50px"}}  > </div> 


       </div>
 
{/*  
 <div className='contact-me'>
<div style={{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,.12)"}}>
<div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}}>
  <h1 className='work'  style={{color:"white",fontSize:"50px"}}>Contact</h1>
</div>
</div>
 </div>
  
        <div   style={{width:"100%",height:"100%",backgroundColor:"white",paddingTop:"30px"}}>
         
         <div style={{display:"flex"}}>
           <div style={{width:"40%"}}>

             <h2 style={{marginTop:"40px",textAlign:"left",marginLeft:"70px",fontSize:"28px",marginBottom:"28px"}} className='work'>Contact me</h2>
             <p className='work' style={{fontWeight:"300",textAlign:"left",marginLeft:"70px",fontSize:"16px",lineHeight:"1.3",marginBottom:"0px",color:"#646363"}}>530 52n st. Oakland Ca</p>
             <p className='work' style={{fontWeight:"300",textAlign:"left",marginLeft:"70px",fontSize:"16px",lineHeight:"1.3",marginBottom:"0px",color:"#646363"}}>USA, 94609</p>
             <br></br>
             <p className='work' style={{fontWeight:"300",textAlign:"left",marginLeft:"70px",fontSize:"16px",lineHeight:"1.3",marginBottom:"0px",color:"#646363"}}>(510)-452-7283</p>
             <p className='work' style={{fontWeight:"300",textAlign:"left",marginLeft:"70px",fontSize:"16px",lineHeight:"1.3",marginBottom:"0px",color:"#646363"}}>fanuelnalem@outlook.com</p>

<div style={{textAlign:"left",marginTop:"38px",marginLeft:"70px"}}>
  <Icon name='facebook'size='large' style={{color:"#cfcfcf",marginRight:"9px"}} />
  <Icon name='twitter' size='large' style={{color:"#cfcfcf",marginRight:"9px"}}  />
  <Icon name='youtube' size='large' style={{color:"#cfcfcf"}}  />

</div>
           </div>
           <div style={{width:"60%"}}>
            
<div style={{flexDirection:"row",display:"flex",marginTop:"40px"}}>
 <div style={{width:"40%",marginRight:'13px'}}>
   <p  className='work' style={{fontSize:"16px",textAlign:"left",color:"#adb7ba",fontWeight:"300"}}>Name</p>
 <input className='form-input' style={{width:"100%"}}  type='text'></input>

 </div>
 <div style={{width:"40%"}}>
 <p  className='work' style={{fontSize:"16px",textAlign:"left",color:"#adb7ba",fontWeight:"300"}}>Email</p>

 <input className='form-input' style={{width:"100%"}}  type='text'></input>

 </div>
</div>

<div style={{textAlign:'left',width:"100%"}}>
<p  className='work' style={{fontSize:"16px",textAlign:"left",color:"#adb7ba",fontWeight:"300",marginTop:"15px"}}>Subject</p>

<input className='form-input' style={{width:`80%`}}  type='text'></input>
 
</div>
<div style={{textAlign:'left',width:"100%"}}>
<p  className='work' style={{fontSize:"16px",textAlign:"left",color:"#adb7ba",fontWeight:"300",marginTop:"15px"}}>Message</p>

<input className='form-input' style={{width:`80%`}}  type='text'></input>
 
</div>
<div style={{textAlign:"left",marginTop:"32px",marginBottom:"90px"}}>
<button className='sendsomething'>Book Now</button>

</div>
  
           </div>

         </div>
        </div>
     
     */}
    
    
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




