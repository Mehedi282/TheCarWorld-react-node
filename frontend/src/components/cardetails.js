import React, {useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import "../components/style/cardetails.css"
import { FaDollarSign } from 'react-icons/fa';
import MakeOffer from './makeoffer'



const Cardetails =()=>{

  const [carinfo, setcarinfo] = useState([]);
  const {id} = useParams()

  const API_URL = `http://localhost:5000/api/fetchProductByid/${id}`;

  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setcarinfo(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(carinfo.img){
    var base64String = btoa(
      String.fromCharCode(...new Uint8Array(carinfo.img.data.data))
    );
}



  return(
    <>
    <Navbar/>
    <h1 className="model">{carinfo.model}</h1>
    <div className="divmain">

    <div className="imgdv">
     <img id="carimage" src={`data:image/png; base64, ${base64String}`}/>


    </div>

    <div className="infodv">
         <h1 className="cprice"><FaDollarSign/>{carinfo.price}</h1>
         <p className="cinfo"><span className="finfo">BODY</span> <span className="binfo">{carinfo.body}</span></p>
         <p className="cinfo"><span className="finfo">MILEAGE</span> <span className="binfo">{carinfo.mileage}</span></p>
         <p className="cinfo"><span className="finfo">FUEL TYPE</span> <span className="binfo">{carinfo.fuel}</span></p>
         <p className="cinfo"><span className="finfo">TRANSMISSION</span> <span className="binfo">{carinfo.transmission}</span></p>
         <p className="cinfo"><span className="finfo">CONDITION</span> <span className="binfo">{carinfo.condition}</span></p>
         <p className="cinfo"><span className="finfo">YEAR</span> <span className="binfo">{carinfo.year}</span></p>
         <p className="cinfo"><span className="finfo">COLOR</span> <span className="binfo">{carinfo.eColor}</span></p>
        <MakeOffer/>




    </div >
    </div><br/>
    <h1 className="cardes">Car Description</h1>
    <p className="deacribtion">
    {carinfo.description}
    </p>
    <Footer/>
    </>
  )

}

export default Cardetails
