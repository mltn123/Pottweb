import React from "react"
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import  { Fragment } from 'react'
const Navbar = () => (
  <nav className= "navbar sticky-top navbar-expand-lg navbar-custom  navbar-sticky" >
  <a class="navbar-brand" href="#"></a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
     <div class="navbar-nav">
       <a class="nav-item nav-link active" href="#"><Link to="hero" smooth duration={1000}>Home</Link></a>
       <a class="nav-item nav-link" href="#"><Link to="about" smooth duration={1000}>About</Link></a>
       <a class="nav-item nav-link" href="#"><Link to="projects" smooth duration={1000}>Projects</Link></a>
       <a class="nav-item nav-link" href="#"><Link to="contact" smooth duration={1000}>Contact</Link></a>

     </div>
   </div>
   <div class="navbar-darkmode">
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
</div>
  </nav>


)
export default Navbar
