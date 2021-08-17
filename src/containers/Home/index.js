import React, { Component } from 'react';
import './../../index.css';
import {
  Container,
  Header,
  Button,
  Grid,
  Segment,
  Image,
} from 'semantic-ui-react';

import pic from './../../components/Images/jbpic.png';
import AosScroll from './../Aos';
import 'aos/dist/aos.css';
 import s1 from './../../components/Images/s1.jpg';
import s2 from './../../components/Images/2.jpg';

  import weather from './../../components/Images/weatherpic.png';
import Resume from './../../components/Images/fanuelResume.pdf';

export default class Home extends Component {
  render() {
    return (
      <div>
      <div className="background">
        <div className="info">
          <Container fluid>
            <Grid divided="vertically">
              <Grid.Row columns={2}>
                <Grid.Column width={3}></Grid.Column>
                <Grid.Column width={13}>
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

      <div style={{ backgroundColor: 'white', padding: '59px 0 100px 0' }}>
        <Container className="bioo">
          <Grid>
            <Grid.Column width={7} style={{ padding: '95px 0 0 0' }}>
              <Image
                src={pic}
                size="medium"
                circular
                verticalAlign="top"
                style={{ margin: '0 0 0 0', padding: '0px 0 0 0' }}
              />
            </Grid.Column>
            <Grid.Column width={9}>
              <h2
                style={{ textAlign: 'left', padding: '25px 0 0 0' }}
                className="txt"
              >
                ABOUT
              </h2>

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

              <a href={Resume} target="_blank" rel="noopener noreferrer">
                <Button
                  style={{ backgroundColor: '#8b5eb4', color: 'white' }}
                  size="large"
                >
                  View my resume.
                </Button>
              </a>
            </Grid.Column>
          </Grid>
        </Container>
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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container text>
        <Header
          as="h3"
          style={{
            fontSize: '3.5em',
            color: 'black',
            fontFamily: "'Maven Pro', sans-serif",
            fontWeight: '700',
          }}
        >
          MY WORK
        </Header>
      </Container>
      <AosScroll />
      <div style={{ height: '80px' }}></div>

      <Segment style={{ padding: '4em 0 6em 0em' }} vertical>
        <div className="card-containers" >
          <div className="image-container" >
            

            <div className="picfront" >
              <Image className="image__img" src={s1} />
              <div className="image__overlay image__overlay--blur" >
                <div style={{ padding: '20px' }} >
                  <h2> Stock Tracker</h2>
                  <br></br>
                  <p>
                    {' '}
                    This application helps you save and track trending
                    stocks from the market onto a personal watchlist. 
                    {/* This application is a helpful tool that helps you save
                    stocks onto a personal wathclist. It provides information
                    on the stock markets top 10 winners and losers of the day.
                    Users can also search and track any stock in the market
                    and view stocks that are trending among other users. */}
                  </p>
                  <p>
                    Made using: HTML, CSS, JavaScript, Semantics UI, React,
                    NodeJs, Mongo, PassportJS and Heroku.
                  </p>
                  <br></br>
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
          
            <div className="picfront">
              <Image className="image__img" src={s2} />
               <div className="image__overlay image__overlay--blur">
              
                
                <div style={{ padding: '20px' }}>
                  <h2> Admin App</h2>
                  <br></br>
                  <p>
                    {' '}
                    A language learning educational app where users can practice and review their progress and admins can
                    assign exercises.
                    {/* A language learning educational app built with React and
                    Semantic UI front-end framework, NodeJs and express
                    back-end, JWT and local authentication, and MongoDB. Users
                    can practice and review their progress and teachers can
                    assign exercises. */}
                  </p>
 
 
               
                  <p>
                    Made using: HTML, CSS, JavaScript, Semantics UI, React,
                    NodeJs, Mongo, PassportJS and Heroku.
                  </p>
                  <br></br>
                  <a
                    href="https://carnatakehomeproject.herokuapp.com/"
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
          
          
            <div className="picfront">
              <Image className="image__img" src={weather} />
              <div className="image__overlay image__overlay--blur">
                <div style={{ padding: '20px' }}>
                  <h2> Weather Dashboard</h2>
                  <br></br>
                  <p>
                    {' '}
                    A web application that provides the current weather and a
                    5-day forecast for a city.
                  </p>
                  <p>
                    Made using: HTML, CSS, JavaScript, jQuery, Bootstrap,
                    OpenWeather API, Moment.js, and GitHub Pages.
                  </p>
                  <br></br>
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
          </div>
        </div>

        <br></br>
        <br></br>

        <a href="https://portfolio082021.herokuapp.com/portfolio">
          <Button
            style={{ backgroundColor: '#8b5eb4', color: 'white' }}
            size="large"
          >
            see more
          </Button>
        </a>
      </Segment>

      
    </div>
    );
  }
}
