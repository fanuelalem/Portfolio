import React, { Component } from 'react';

import { Menu,Breadcrumb } from 'semantic-ui-react';

// import sayhello from './../../container/About/about'

import { Link } from 'react-router-dom';

export default class NavBar extends Component {
 
  state = {
    index:0
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
                <h1 className='menunavbar' style={{fontSize:"20px",fontWeight:"500",color:this.state.index == 0? 'black' :' grey'}}>HOME</h1>
         </Menu.Item>
        <Menu.Item
          name='about'
           
          style={{margin:" 0 15px 0 0"}}
          onClick={()=>{
            this.setState({index:1})
           }}
        >
                 <Link to='/'>
                      <h1 className='menunavbar' style={{fontSize:"20px",fontWeight:"500",color:this.state.index == 1 ? 'black' : "darkgrey"}}>ABOUT</h1>
                      </Link> 
        </Menu.Item>
        <Menu.Item
          name='portfolio'
        
          style={{margin:" 0 15px 0 0"}}
          onClick={()=>{
            this.setState({index:2})
           }}
        >
                <Link to='/'>
                     <h1 className='menunavbar' style={{fontSize:"20px",color:this.state.index == 2? 'black' : "darkgrey",fontWeight:"500"}}>PORTFOLIO</h1>
                     </Link> 
        </Menu.Item>
        <Menu.Item
          name='contact'
           onClick={()=>{
            this.setState({index:4})
           }}

>
                    <h1 className='menunavbar' style={{fontSize:"20px",fontWeight:"500",color:this.state.index == 4? 'black' : "darkgrey"}}>CONTACT</h1>

        </Menu.Item>
      </Menu>
      </div>
         
           </div>
        </div>
     
      
     );
  }
}
