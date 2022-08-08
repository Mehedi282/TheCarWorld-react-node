import React, { useState, useEffect, useRef } from 'react'
import "../components/style/card.css"
// import Particles from 'react-tsparticles'
import "../components/style/modelbar.css"
import "../components/style/colcar.css"

import { ChevronDownIcon } from "@heroicons/react/solid"
import MetaData from '../components/MetaData'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import products from "../data/data"
import ShowPro from '../components/ShowPro'
import Footer from '../components/Footer'

import axios from 'axios'
import {Link} from 'react-router-dom'
import SpeedIcon from '@mui/icons-material/Speed';

function Collection(props) {
  // const particlesInit = (main) => {
  //   console.log(main);

  //   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // };

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };
  const ref = useRef(null);
  const [items, setItems] = useState(products)
  const [toggle, setToggle] = useState(false)
  const [toggle2, setToggle2] = useState(false)
  const [toggle3, setToggle3] = useState(false)
  const [posts, setPosts] = useState([]);


  function filterItem(cateItem) {
    const updatedItems = products.filter((curElem) => {
      return curElem.make === cateItem;
    })
    setItems(updatedItems);
    console.log(updatedItems)
    setToggle2(false);
  }
  function filterModel(cateMod) {
    const updatedItems = products.filter((curElem) => {
      return curElem.Model === cateMod;
    })
    setItems(updatedItems);
    console.log(updatedItems)
    setToggle2(false);
  }

  function filterYear(cateYear) {
    const updatedItems = products.filter((curElem) => {
      return curElem.year === cateYear;
    })
    setItems(updatedItems);
    console.log(updatedItems)
    setToggle3(false);
  }

  const handleUser = () => {
    toggle ? setToggle(false) : setToggle(true);
  }
  const handleUser2 = () => {
    toggle2 ? setToggle2(false) : setToggle2(true);
  }
  const handleUser3 = () => {
    toggle3 ? setToggle3(false) : setToggle3(true);
  }

  useEffect(() => {
    document.addEventListener('click', close)
    return () => document.removeEventListener("click", close);
  }, []);
  function close(e) {
    setToggle(e && e.target === ref.current)
  }

  const API_URL = 'http://localhost:5000/api/fetchProduct';

  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <MetaData title={'Our Collection'}/>
      <div className='bg-cover '>
        {/* <Particles
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
        }}/> */}
      </div>
      <Navbar />
      <Slider />
      <div className='container modelbar'>
        <div className='row btn-set'>
          <div className='col-md-3 col-4 c-btn'>

            <button className='btn-d' onClick={handleUser} ref={ref}>
              Choose Make
              <ChevronDownIcon className='mob-user-icon arrow' />
            </button>
            <div className={toggle ? 'dropdown-menu' : 'hidden'}>
              <ul className='user-dropdown list-unstyled text-dark  '>
                <li onClick={() => filterItem('AUDI')}>AUDI</li>
                <li onClick={() => filterItem('BMW')}>BMW</li>
                <li onClick={() => filterItem('CHEVROLET')}>CHEVROLET</li>
                <li onClick={() => filterItem('FLAT')}>FLAT</li>
                <li onClick={() => filterItem('FORD')}>FORD</li>
                <li onClick={() => filterItem('HONDA')}>HONDA</li>
                <li onClick={() => filterItem('HYUNDAI')}>HYUNDAI</li>
                <li onClick={() => filterItem('Isuzu')}>Isuzu</li>
                <li onClick={() => filterItem('JEEP')}>JEEP</li>
                <li onClick={() => filterItem('KIA')}>KIA</li>
                <li onClick={() => filterItem('LAND ROVER')}>LAND ROVER</li>
                <li onClick={() => filterItem('MAHINDRA')}>MAHNIDRA</li>
                <li onClick={() => filterItem('Maserati')}>Maserati</li>
                <li onClick={() => filterItem('MAZDA')}>MAZDA</li>
                <li onClick={() => filterItem('Marcedez-Benz')}>Marcedes</li>
                <li onClick={() => filterItem('MINI')}>MINI</li>
                <li onClick={() => filterItem('NISSAN')}>NISSAN</li>
                <li onClick={() => filterItem('PORSCHE')}>PORSCHE</li>
                <li onClick={() => filterItem('SUZUKI')}>SUZUKI</li>
                <li onClick={() => filterItem('TOYOTA')}>TOYOTA</li>
                <li onClick={() => filterItem('VW')}>VW</li>
                <li onClick={() => filterItem('VW GTI')}>VW GTI</li>
              </ul>
            </div>
          </div>
          <div className='col-md-3 col-4 c-btn '>

            <button className='btn-d' onClick={handleUser2} >
              Choose Model
              <ChevronDownIcon className='mob-user-icon arrow' />
            </button>
            <div className={toggle2 ? 'dropdown-menu' : 'hidden'}>
              <ul className='user-dropdown list-unstyled text-dark  '>
                <li onClick={() => filterModel('1 Series')}>1 SERIES</li>
                <li onClick={() => filterModel('1.2 Picanto')}>1.2 PICANTO STYLE</li>
                <li onClick={() => filterModel('1.4 Glx Baleno')}>1.4 GLX BALENO</li>
                <li onClick={() => filterModel('1M')}>1M</li>
                <li onClick={() => filterModel('2 Series')}>2 SERIES</li>
                <li onClick={() => filterModel('370Z')}>370Z</li>
                <li onClick={() => filterModel('5 Series')}>5 SERIES</li>
                <li onClick={() => filterModel('7 Series')}>7 SERIES</li>
                <li onClick={() => filterModel('A200 CDI')}>A200 CDI</li>
                <li onClick={() => filterModel('A250 SPORT')}>A250 SPORT</li>
                <li onClick={() => filterModel('A3')}>A3</li>
                <li onClick={() => filterModel('A45 AMG')}>A45 AMG</li>
                <li onClick={() => filterModel('A45 S AMG')}>A45 S AMG</li>
                <li onClick={() => filterModel('AC COBRA')}>AC COBRA</li>
                <li onClick={() => filterModel('Accord')}>Accord</li>
                <li onClick={() => filterModel('ALTIMA')}>ALTIMA</li>
                <li onClick={() => filterModel('AMAROK')}>AMAROK</li>
                <li onClick={() => filterModel('AMG GT')}>AMG GT</li>
                <li onClick={() => filterModel('AVALON')}>AVALON</li>
                <li onClick={() => filterModel('BROOKLANDS')}>BROOKLANDS</li>
                <li onClick={() => filterModel('C-CLASS')}>C-CLASS</li>
                <li onClick={() => filterModel('C200')}>C200</li>
                <li onClick={() => filterModel('C250')}>C250</li>
                <li onClick={() => filterModel('C250 AMG')}>C250 AMG</li>
                <li onClick={() => filterModel('C43')}>C43</li>
                <li onClick={() => filterModel('C63 S AMG')}>C63 S AMG</li>

              </ul>
            </div>
          </div>
          <div className='col-md-3 col-4 c-btn'>

            <button className='btn-d' onClick={handleUser3}>
              Choose Year
              <ChevronDownIcon className='mob-user-icon arrow' />
            </button>
            <div className={toggle3 ? 'dropdown-menu' : 'hidden'}>
              <ul className='user-dropdown list-unstyled text-dark  '>
                <li onClick={() => filterYear('1976')} >1967</li>
                <li onClick={() => filterYear('1990')}>1990</li>
                <li onClick={() => filterYear('2000')}>2000</li>
                <li onClick={() => filterYear('2005')}>2005</li>
                <li onClick={() => filterYear('2008')}>2008</li>
                <li onClick={() => filterYear('2012')}>2012</li>
                <li onClick={() => filterYear('2015')}>2015</li>
                <li onClick={() => filterYear('2019')}>2019</li>
                <li onClick={() => filterYear('2016')}>2016</li>

              </ul>
            </div>
          </div>
        </div>

      </div>
      <div className='Main'>
        {/* <Maincolpage dataproduct={items}/> */}
        <div className='container'>
          <div className="container c-style mt-4">
            <div className="row collection-cards">
              <h1 className='text-light text-center'>Our Collection</h1>

              <ShowPro />
              <div className="div1">
              {
                posts.map((data)=>{
                  var base64String = btoa(
                    String.fromCharCode(...new Uint8Array(data.img.data.data))
                  );
                  return(
                    <div className="div2">

                  <Link to ={`/cardetails/${data._id}`}>  <img id="colimg" src={`data:image/png; base64, ${base64String}`} width="250" height="120"/></Link>
                  <h5 className="hello">{data.year}</h5>
                  <h2 className="hello"> {data.model}</h2>
                  <p className="hello"> {data.name}</p>
                  <h5 className="price"><span className="drive"><SpeedIcon/> {data.mileage}</span> <span className="dpc">R {data.price}</span></h5>
                    </div>
                  )
                })


               }
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>


  )
}

export default Collection
