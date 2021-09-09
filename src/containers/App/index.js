import React from 'react';
import './../../App.css';
import Home from './../Home';
import Portfolio from './../Portfolio';
import { Route } from 'react-router-dom';
import NavBar from '../../components/nav/index';
import ScrollToTop from './../../components/ScrollToTop';
import { Container, Icon, Grid } from 'semantic-ui-react';
 function App() {
  return (
    <div className="App">
      <ScrollToTop className="scroll" />

 
      <Route exact path="/" component={Home} />
            {/* <NavBar /> */}

      <Route exact path="/portfolio" component={Portfolio} />
 
      <div className="footerid" style={{ minHeight: '345px' }}>
 
        
        <Grid columns={4}>
          <Grid.Row>
            <Grid.Column width={4}>
              <h2
                className="logo"
                style={{ padding: '55px 0 0 0', color: '#d7d8da',fontWeight:"400" }}
              >
                Fanuel Alem
              </h2>
            </Grid.Column>
            <Grid.Column width={4}>
              <div style={{ textAlign: 'left', marginLeft: '100px' }}>
                <h3
                  className="work"
                  style={{ padding: '70px 0 0 0', fontSize: '18px',color:"white" }}
                >
                  Contact Me
                </h3>
                <br></br>
                <h3
                  className="work"
                  style={{ fontSize: '16px',fontWeight:"400",margin: '0 0 4px 0',color:"white" }}
                >
                  (510) 452-7283
                </h3>
                <h3
                  className="work"
                  style={{ fontSize: '16px',fontWeight:"400",margin: '0 0 4px 0',color:"white" }}
                >
                  fanuelnalem@outlook.com
                </h3>
                <h3
                  className="work"
                  style={{ fontSize: '16px',fontWeight:"400",margin: '0 0 4px 0',color:"white" }}
                >
                  530 52nd st. Oakland
                </h3>
                <h3
                  className="work"
                  style={{ fontSize: '16px',fontWeight:"400",margin: '0 0 0 0',color:"white" }}
                >
                  94609
                </h3>
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <div style={{ textAlign: 'left', marginLeft: '100px' }}>
                <h3
                  className="work"
                  style={{ padding: '70px 0 0 0', fontSize: '18px',color:"white" }}
                >
                  Social
                </h3>
                <br></br>

                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/fanuel-alem-12991b32/"
                  rel="noopener noreferrer"
                >
                  <h3
                    className="work"
                    style={{ fontSize: '16px', margin: '0 0 4px 0',fontWeight:"400",color:"white" }}
                  >
                    LinkedIn
                  </h3>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/fanuelalem"
                  rel="noopener noreferrer"
                >
                  <h3
                    className="work"
                    style={{ fontSize: '16px', margin: '0 0 4px 0',fontWeight:"400",color:"white" }}
                  >
                    Github
                  </h3>
                </a>

                <a
                  target="_blank"
                  href="https://fanuel-portfolio.herokuapp.com/portfolio"
                  rel="noopener noreferrer"
                >
                  <h3
                    className="work"
                    style={{ fontSize: '16px', margin: '0 0 4px 0',fontWeight:"400",color:"white" }}
                  >
                    Portfolio
                  </h3>
                </a>
              </div>
            </Grid.Column>
            <Grid.Column width={4} style={{ padding: '70px 0 0 0' }}>
            
              {/* <div>
                <a
                  href="mailto:fanuelnalem@outlook.com"
                  style={{ color: '#60aafb', margin: '0 150px 0 0' }}
                >
                  <Icon name="mail" size="big"></Icon>
                </a>
              </div> */}

              <div style={{display:"flex",justifyContent:"flex-start"}}>
                <Icon name='facebook' size='large' style={{marginRight:"5px",color:'#d7d8da'}} />
                 <Icon name='twitter' size='large' style={{marginRight:"5px",color:'#d7d8da'}} />
                <Icon name='youtube' size='large'  style={{color:"#d7d8da"}} />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </div>
       <Container fluid>
        <p
          className="para"
          style={{
            backgroundColor: '#00444f',
            color: 'white',
            padding: '20px',
            textAlign: 'left',
          }}
        >
          <a
            style={{ color: 'white', fontWeight: '200' }}
            href="http://localhost:3000/"
          >
            © 2020 Copyright Fanuel Alem.
          </a>

          <span className="spann">
            <span className="git-icon">
              <a
                style={{ color: 'white' }}
                href="https://github.com/fanuelalem"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <Icon style={{ fontSize: '1.7rem' }} name="github"></Icon>
              </a>
            </span>
            <span className="linkedin-icon">
              <a
                style={{ color: 'white' }}
                href="https://www.linkedin.com/in/fanuel-alem-12991b32/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon style={{ fontSize: '1.7rem' }} name="linkedin"></Icon>
              </a>
            </span>
            <span>
              <a
                style={{ color: 'white'}}
                href="mailto:fanuelnalem@outlook.com"
              >
                <Icon style={{ fontSize: '1.7rem' }} name="mail"></Icon>
              </a>
            </span>
          </span>
        </p>
      </Container>
    </div>
  );
}

export default App;
