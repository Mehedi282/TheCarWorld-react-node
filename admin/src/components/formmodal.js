import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'




import './style/form.css'

function Example() {
  const [show, setShow] = useState(false);
  const [name, setname] = useState('')
  const [price, setprice] = useState('')
  const [description, setdescription] = useState('')
  const [condition, setcondition] = useState('')
  const [year, setyear] = useState('')
  const [body, setbody] = useState('')
  const [mileage, setmileage] = useState('')
  const [fuel, setfuel] = useState('')
  const [transmission, settransmission] = useState('')
  const [eColor, seteColor] = useState('')
  const [drive, setdrive] = useState('')
  const [model, setmodel] = useState('')
  const [make, setmake] =useState('')
  const [productimage, setproductimage] = useState('')



  const handlesubmit =()=>{

     const formData = new FormData();
     formData.append('name', name);
     formData.append('price', price);
     formData.append('description', description);
     formData.append('condition', condition);
     formData.append('year', year);
     formData.append('body', body);
     formData.append('mileage', mileage);
     formData.append('fuel', fuel);
     formData.append('transmission', transmission);
     formData.append('eColor', eColor);
     formData.append('drive', drive);
     formData.append('model', model);
     formData.append('make', make);
     formData.append('productimage', productimage);

    axios.post(`http://localhost:5000/api/createProduct`, formData,  {headers: {"Content-type": "multipart/form-data"}})
       .then(response => {
         console.log(response);
         console.log(response.data);
         if(response){
           alert("Submitted Succesfully");
         }
     })
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button id="acbtn" variant="primary" onClick={handleShow}>
        Add Car
      </Button>

      <Modal className="modalbox" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Car Information</Modal.Title>
        </Modal.Header>
        <input className="input" placeholder='Car Name'  onChange={(e)=>{setname(e.target.value)}} required />
        <input className="input" type="number" placeholder='Price'  onChange={(e)=>{setprice(e.target.value)}} />
        <input className="input" placeholder='Description' onChange={(e)=>{setdescription(e.target.value)}} />
        <input className="input" placeholder='Condition' onChange={(e)=>{setcondition(e.target.value)}} />
        <input className="input" type="number" placeholder='Year' onChange={(e)=>{setyear(e.target.value)}} />
        <input className="input" placeholder='Body' onChange={(e)=>{setbody(e.target.value)}} />
        <input className="input" type="number" placeholder='Mileage' onChange={(e)=>{setmileage(e.target.value)}} />
        <input className="input" placeholder='Fuel' onChange={(e)=>{setfuel(e.target.value)}} />
        <input className="input" placeholder='Transmission' onChange={(e)=>{settransmission(e.target.value)}} />
        <input className="input" placeholder='Color' onChange={(e)=>{seteColor(e.target.value)}} />
        <input className="input" placeholder='Drive' onChange={(e)=>{setdrive(e.target.value)}} />
        <input className="input" placeholder='Model' onChange={(e)=>{setmodel(e.target.value)}} />
        <input className="input" placeholder='Make' onChange={(e)=>{setmake(e.target.value)}} />
        <input className="input" type="file" placeholder='Make' onChange={(e)=>{setproductimage(e.target.files[0])}} />


        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlesubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example
