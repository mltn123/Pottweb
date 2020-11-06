import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import  { Fragment } from 'react'


const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [timer, setTimer] = useState(true);


  setTimeout(function() { //Start the timer
        setTimer(false); //After 1 second, set render to true
    }.bind(this), 5000)




  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);


  return (


    <section id="hero" className="jumbotron">

      <Container>
      <h4 className="dark-mode-button">
     <Fade left ={isDesktop}  bottom={isMobile} duration={1000} delay={500} distance="30px" >
      <Fade left opposite when={timer}  bottom={isMobile} duration={1000} delay={500} distance="30px" >
      <div id="hideonmobile">
      <a class="link" href="#">
  <span class="link__arrow">
    <span></span>
    <span></span>
  </span>
  <span class="link__line"></span>
  <span class="link__text">Darkmode</span>
</a>
      </div>
      </Fade>


          <ThemeToggler>
                 {({ theme, toggleTheme }) => {
                   const iconClass =
                     theme === 'light' ? 'fa fa-moon-o fa-2x' : 'fa fa-sun-o fa-2x'
                   return (
                     <Fragment>
                       <i
                         className={iconClass}
                         onClick={() => {
                           const nextTheme = theme === 'light' ? 'dark' : 'light'
                           toggleTheme(nextTheme)
                         }}
                       />
                     </Fragment>
                   )
                 }}
               </ThemeToggler>
                     </Fade>
      </h4>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">

          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Malte'}</span>
            <br />
            {subtitle || "I'm the Unknown Developer."}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
