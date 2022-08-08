import React , {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './style/sroom.css'

const ShpowrromCar =()=>{

    const [posts, setPosts] = useState([]);
    const API_URL = 'http://localhost:5000/api/fetchProduct';

    const fetchData = async () => {
      const { data } = await axios.get(API_URL);
      setPosts(data);
    };

    useEffect(() => {
      fetchData();
    }, []);

  return(
    <>
    <div>
    {
      posts.map((car)=>{
        var base64String = btoa(
          String.fromCharCode(...new Uint8Array(car.img.data.data))
        );
        return(
          <div className="mdiv">
              <div className="srcdb1">
              <Link to ={`/cardetails/${car._id}`}>  <img id="colimg" src={`data:image/png; base64, ${base64String}`} width="267" height="200"/></Link>

              </div>

              <div className="srcdb2">
              <h1>{car.model}</h1>
              </div>

              <div className="srcdb3">
              <h1>R {car.price}</h1>
              </div>
          </div>
        )
      })
    }
    </div>
    </>
  )
}

export default ShpowrromCar
