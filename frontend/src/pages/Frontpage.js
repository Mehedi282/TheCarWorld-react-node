import React from 'react'
import { NavLink } from 'react-router-dom';
import Particles from 'react-tsparticles'
import {ChevronRightIcon} from '@heroicons/react/solid'


function Frontpage() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
   
    return (
      <>
       <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#fffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}/>
        <div className='container-fluid px-0 overflow-hidden'>
        <div className='bg-cover'>
        </div>
            <div className="logo cornr p-3 ">
          <NavLink to="/">
          <h3>
            <span>T</span>he<span>W</span>orld
            <span>C</span>ar
          </h3>
          </NavLink>
        
            </div>
            <div className='extra'></div>
        <div className='side-nav row'>
            <ul className='list-unstyled col-md-4'>
                <li className='col-nav'><NavLink className={"light"} to="/collection">COLLECTION</NavLink></li>
                <br/>
                <br/>
                <NavLink to="/showroom">
            
                <li className='bot-bor'>SHOWROOM</li> 
                </NavLink>
                <br/>
                <NavLink to="/contact">

                <li className='bot-bor'>
                  CONTACT US
                  </li>
                  </NavLink>
                  
                
                <br/>
                
                <br/>
            </ul>
            <div className='col-md-4 frontpage-head text-light'>
                <h2>WELCOME TO</h2>
                <div className="logo-f">
                <h1>
                  <span>T</span>he <span>W</span>orld
                   <span> C</span>ar
                </h1>
            
                </div>            
                    <h4>COLLECTIONS</h4>
                <NavLink to="/dreamcar">
                <h6>FIND YOUR DREAM CAR
                
                <i ><ChevronRightIcon className='arrow-dream'/></i>
                
                </h6>
                </NavLink>
            </div>

        </div>
        </div>
        </>
    )
}

export default Frontpage

