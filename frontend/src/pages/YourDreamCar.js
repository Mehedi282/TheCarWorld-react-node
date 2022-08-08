import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../components/style/colcar.css'

import axios from 'axios'
import {Link} from 'react-router-dom'
import SpeedIcon from '@mui/icons-material/Speed';

function YourDreamCar() {

  const [posts, setPosts] = useState([]);
  const API_URL = 'http://localhost:5000/api/fetchProduct';

  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
    return (
        <>
            <Navbar/>
            <div className="scroll" >
            {
              posts.map((data)=>{
                var base64String = btoa(
                  String.fromCharCode(...new Uint8Array(data.img.data.data))
                );
                return(
                  <div className="dreamdiv">

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

            <Footer/>

        </>
    )
}

export default YourDreamCar;
