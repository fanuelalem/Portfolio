import React, { Component } from 'react';

import { Menu,Breadcrumb } from 'semantic-ui-react';

// import sayhello from './../../container/About/about'

import { Link } from 'react-router-dom';

export default class NavBar extends Component {
 
  state = {
    index:0
  }

  componentDidMount = () => {
    const scrollToTopElement = document.getElementById(this.props.topEl)
    const aboutSection = document.getElementById(this.props.aboutEl)
    const portfolioSection = document.getElementById(this.props.portfolioEl)
    const contactSection = document.getElementById(this.props.contactEl)
    const scrollContact = document.getElementById('scrolltocontact')
    const HomeTab = document.getElementById('scroll-to-top')
    const scrollportfolio = document.getElementById('scrolltoportfolio')
    const scrolltoabout = document.getElementById('scrolltoabout')

 
HomeTab.addEventListener('click',()=>{
   scrollToTopElement.scrollIntoView()
})
    scrollContact.addEventListener('click',()=>{
      contactSection.scrollIntoView()
     })
    
    scrollportfolio.addEventListener('click',()=>{
      portfolioSection.scrollIntoView()
     })
     scrolltoabout.addEventListener('click',()=>{
       aboutSection.scrollIntoView()
     })
    // const topSection = document.getElementById('scrolltotop')
    // const aboutSection = document.getElementById('scrolltoabout')
    // const portfolioSection = document.getElementById('scrolltoportfolio')
    // const contactSection = document.getElementById('scrolltocontact')
    // const topItem = document.getElementById(this.props.topEl)
    // const aboutItem = document.getElementById(this.props.aboutEl)
    // const portfolioItem = document.getElementById(this.props.portfolioEl)
    // const contactItem = document.getElementById(this.props.contactEl)

    // topSection.addEventListener('click',()=>{
    //   alert('hello')
    // },false)
   
    
    // aboutSection.addEventListener('click',()=>{
    //   alert('hello')
    // },false)
     
    // portfolioSection.addEventListener('click',()=>{

    // },false)
     
    // contactSection.addEventListener('click',()=>{
      
    // },false)
     
  }
 
   render() {
 
    
    return (
   

           
        <div className=" flex navy" id={this.props.id}    >
          <div style={{alignItems:"center",height:"100%",display:"flex"}}>

        
          <div style={{padding:'0 0 0 65px'}}>

       
        <Menu style={{margin:"0px"}} text>
        
        <Menu.Item
          name='fanuel'
            style={{margin:" 0 15px 0 0"}}
          onClick={()=>{
           this.setState({index:0})
          }}
        >
                           <Link id='scrolltotop' >


                <h1 id='scroll-to-top' className='menunavbar' style={{fontSize:"20px",fontWeight:"500",color:this.state.index == 0? 'black' :' grey'}}>HOME</h1>
         
         </Link>
         </Menu.Item>
        <Menu.Item
          name='about'
           
          style={{margin:" 0 15px 0 0"}}
          onClick={()=>{
            this.setState({index:1})
           }}
        >
                 <Link  >
                      <h1 id='scrolltoabout' className='menunavbar' style={{fontSize:"20px",fontWeight:"500",color:this.state.index == 1 ? 'black' : "darkgrey"}}>ABOUT</h1>
                      </Link> 
        </Menu.Item>
        <Menu.Item
          name='portfolio'
        
          style={{margin:" 0 15px 0 0"}}
          onClick={()=>{
            this.setState({index:2})
           }}
        >
                <Link   >
                     <h1 id='scrolltoportfolio' className='menunavbar' style={{fontSize:"20px",color:this.state.index == 2? 'black' : "darkgrey",fontWeight:"500"}}>PORTFOLIO</h1>
                     </Link> 
        </Menu.Item>
        <Menu.Item
          name='contact'
           onClick={()=>{
            this.setState({index:4})
           }}

>
<Link >


                    <h1 id='scrolltocontact' className='menunavbar' style={{fontSize:"20px",fontWeight:"500",color:this.state.index == 4? 'black' : "darkgrey"}}>CONTACT</h1>
                     </Link> 

        </Menu.Item>
      </Menu>
      </div>
         
           </div>
        </div>
     
      
     );
  }
}
