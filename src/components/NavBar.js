import './NavBar.css';
import * as Scroll from 'react-scroll';
import { useState } from 'react';

const NavBar = () => {
    const offset = -50;
    const [navbar, setNavbar] = useState('navbar-light');
    
    return(
        <nav class={`${navbar} navbar navbar-expand-lg fixed-top`}>
        <div class="container">

            <Scroll.Link spy={true} offset={offset} style={{ textDecoration: 'none' }}>
                <span class="navbar-brand" style={{ textDecoration: 'none' }}>Maaz Makrod</span>
            </Scroll.Link>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">

                <Scroll.Link style={{ textDecoration: 'none' }} to='parallax' spy={true} offset={offset} onSetActive={() => setNavbar('navbar-light')} onSetInactive={() => setNavbar('navbar-light bg-dark')}>
                    <li class="nav-item">
                        <span class="nav-link">Home</span>
                    </li>
                </Scroll.Link>

                <Scroll.Link style={{ textDecoration: 'none' }} to='experience' spy={true} offset={offset}>
                    <li class="nav-item">
                        <span class="nav-link">Experience</span>
                    </li>
                </Scroll.Link>

                <Scroll.Link style={{ textDecoration: 'none' }} to='projects' spy={true} offset={offset}>
                    <li class="nav-item">
                        <span class="nav-link">Projects</span>
                    </li>
                </Scroll.Link>

                <Scroll.Link style={{ textDecoration: 'none' }} to='about' spy={true} offset={offset}>
                    <li class="nav-item">
                        <span class="nav-link">About Me</span>
                    </li>
                </Scroll.Link>

            </ul>
            </div>
        </div>
        </nav>
    );
}

export default NavBar;