import React, { Component } from 'react';
import './App.css';
import {Header, Navigation, Drawer, Content, Layout} from 'react-mdl'
import Main from './components/main';
import { Link } from 'react-router-dom'; 

class App extends Component{
  render() {
    return (
      
      <div className="demo-big-content">
        <Layout>
              <Header className="header-color" title="Title" scroll>
                  <Navigation>
                      <Link to="/resume">Resume</Link>
                      <Link to="/about">About Me</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contactme">Contact Me</Link>
                  </Navigation>
              </Header>
              <Drawer title="Testing">
                  <Navigation>
                      <Link to="/resume">Resume</Link>
                      <Link to="/about">About Me</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contactme">Contact Me</Link>
                  </Navigation>
              </Drawer>
              <Content>
                <div className="page-content"/>
                <Main/>
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;