import React, { Component } from 'react';
import './App.css';
import Icon from './Icon.js'
import Project from './Project.js'
import NavLink from './NavLink.js'

import bg from './bg.jpg';
import ponysfm from './ponysfm.png';
import workshop from './workshop.png';
import ntop from './ntop.png';

class App extends Component {
  iconLinks = [
    {
      url: 'mailto:gian.sass@outlook.de',
      iconClass: 'fa-envelope'
    },
    {
      url: 'https://twitter.com/GianSass',
      iconClass: 'fa-twitter'
    },
    {
      url: 'https://github.com/Nuke928',
      iconClass: 'fa-github'
    },
    {
      url: 'https://giansass.com/blog',
      iconClass: 'fa-wordpress'
    },
  ];

  projects = [
    {
      name: 'PonySFM',
      url: 'https://ponysfm.com',
      image: ponysfm,
      description: 'A platform sharing highly curated Source Filmmaker resources'
    },
    {
      name: 'PonySFM Workshop',
      url: 'https://workshop.ponysfm.com',
      image: workshop,
      description: 'The PonySFM Workshop app manages all your SFM mods, creating a distraction-free environment for creativity'
    },
    {
      name: 'NTop',
      url: 'https://github.com/Nuke928/NTop',
      image: ntop,
      description: 'htop-like system-monitor with Vi-emulation for Windows'
    }
  ];

  state = {
    scrolling: false
  };
  
  constructor(props) {
    super(props);
    this.navLinks = new Array(3);
    for(var i = 0; i < 3; ++i) {
      this.navLinks[i] = React.createRef();
    }
    this.infoSection = React.createRef();
    this.aboutMeSection = React.createRef();
    this.projectSection = React.createRef();
  }

  onScroll = () => {
    let currentSection = this.navLinks[0].current;
    for(var i = 0; i < 3; ++i) {
      const link = this.navLinks[i];
      const margin = 50;
      if(window.pageYOffset > Math.max(0, link.current.props.targetRef.current.offsetTop - margin)) {
        currentSection = link.current;
      }
    }

    this.makeNavItemActive(currentSection);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    this.makeNavItemActive(this.navLinks[0].current);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  makeNavItemActive(item) {
    for(var i = 0; i < 3; ++i) {
      const link = this.navLinks[i];
      link.current.setActive(false);
    }

    item.setActive(true);
    this.setState({scrolling: true});
  }

  selectNavItem(item) {
    //this.makeNavItemActive(item);
    item.props.targetRef.current.scrollIntoView({behavior: 'smooth'});
  }

  onStartNodeMount = (node) => this.startNode = node

  scrollToContent() {
    this.aboutMeSection.current.scrollIntoView({behavior: 'smooth'});
  }

  render() {
    return (
      <div className='container'>
        <aside className='navbar desktop'>
          <ul className='nav'>
            <NavLink targetRef={this.infoSection} ref={this.navLinks[0]} onClick={(node) => this.selectNavItem(node)} title='Info' />
            <NavLink targetRef={this.aboutMeSection} ref={this.navLinks[1]} onClick={(node) => this.selectNavItem(node)} title='About Me' />
            <NavLink targetRef={this.projectSection} ref={this.navLinks[2]} onClick={(node) => this.selectNavItem(node)} title='Projects' />
          </ul>
        </aside>
        <main className='main'>
          <section ref={this.infoSection} className='block block--centered block--welcome inverse'>
            <div className='block__container'>
              <h1 className='block__header uppercase fadein-1s scale-1s'>
                Hi, I am Gian
              </h1>
              <ul className='iconlist fadein-2s'>
                {
                  this.iconLinks.map(function(icon, i) {
                    return (<Icon url={icon.url} iconClass={icon.iconClass} />);
                  })
                }
              </ul>
              <div className='scroll' onClick={() => this.scrollToContent()}>
              </div>
            </div>
          </section>
          <section ref={this.aboutMeSection} className='block block--centered block--aboutme' id='scroll-here'>
            <div className='block__container'>
              <h1 className='block__header block__header--medium uppercase'>
                Who am I?
              </h1>
              <p className='block__lead paragraph'>
                I'm a Germany-based full-stack developer striving to combine my passions through creative projects.
                Other than coding I also do graphics design and indie game development.
              </p>
              <p className='block__lead paragraph'>
                I have a <a href='https://giansass.com/blog'>blog</a> where I write articles such as <a href='https://giansass.com/blog/mandelbrot-set-part-2-opengl-program/'>how to render the Mandelbrot set in OpenGL</a> and other interesting stuff.
              </p>
            </div>
          </section>
          <section ref={this.projectSection} className='block block--projects block--centered'>
            <div className='block__container'>
              <h1 className='block__header block__header--medium uppercase'>
                Selected Projects
              </h1>
              <div className='projects'>
                {
                  this.projects.map(function(project, i) {
                    return (<Project key={i} name={project.name} url={project.url} image={project.image} description={project.description} />);
                  })
                }
              </div>

            </div>
          </section>
        </main>
        <footer className='footer inverse'>
          <div className='footer__content'>
            <p className='footer__copyright'>Copyright &copy; 2018 Gian Sass</p>
          </div>
        </footer>
      </div>
    )
  }
}

export default App;
