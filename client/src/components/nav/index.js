import React, { Component } from 'react';

import { Menu } from 'semantic-ui-react';

// import sayhello from './../../container/About/about'

import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  state = { activeItem: [] };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render(props) {
    const { activeItem } = this.state;

    return (
      <div>
        <div className="navy">
          <Menu secondary>
            <Menu.Menu>
              <Menu.Item>
                <div>
                  <h3 className="nav-text">
                    {' '}
                    <a
                      className="name-nav"
                      style={{ fontSize: '25px', paddingLeft: '45px' }}
                      href="https://fanuel-portfolio.herokuapp.com/"
                    >
                      {' '}
                      Fanuel Alem{' '}
                    </a>{' '}
                  </h3>
                </div>
              </Menu.Item>
            </Menu.Menu>
            <Menu.Menu position="right">
              <div className="navItem">
                <Menu.Item
                  as={Link}
                  to="/"
                  activeclassname="about-sec"
                  name="About"
                  active={activeItem === 'About'}
                  onClick={this.handleItemClick}
                >
                  <h3 className="nav-text" style={{ fontWeight: '200' }}>
                    About{' '}
                  </h3>
                </Menu.Item>
              </div>

              <Menu.Item
                as={Link}
                to="/portfolio"
                name="Portfolio"
                active={activeItem === 'Portfolio'}
                onClick={this.handleItemClick}
              >
                <h3 className="nav-text" style={{ fontWeight: '200' }}>
                  Portfolio
                </h3>
              </Menu.Item>
              <Menu.Item
                name="Contact"
                active={activeItem === 'Contact'}
                onClick={this.handleItemClick}
              >
                <a href="#sayhello">
                  <h3
                    className="nav-text"
                    style={{ fontWeight: '200', paddingRight: '60px' }}
                  >
                    Contact
                  </h3>
                </a>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>
      </div>
    );
  }
}
