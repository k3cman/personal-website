import React, { Component, Fragment } from 'react';

//Components
import Container from './components/Container';
import Row from './components/Row';
import NavBar from './components/NavBar';
import HeroSection from './components/landing/HeroSection';
import AboutSection from './components/landing/AboutSection';
import ProjectsSection from './components/landing/ProjectsSection';
import Contact from './components/landing/Contact';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Container section="section-1">
          <NavBar />
          <HeroSection />
        </Container>
        <Container section="about">
          <Row>
            <AboutSection />
          </Row>
        </Container>
        <Container section="work">
          <Row>
            <ProjectsSection />
          </Row>
        </Container>
        <Container section="contact">
          <Row>
            <Contact />
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default App;
