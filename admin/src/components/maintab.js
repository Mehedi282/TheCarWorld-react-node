import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import React, { useState, useEffect } from 'react';
import Modal from './formmodal.js'
import './style/maintab.css'
import axios from 'axios'
import OfferTable from './offerpricetable'




function LeftTabsExample() {

  const [posts, setPosts] = useState([]);

  const API_URL = 'http://localhost:5000/api/fetchProduct';

  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteCar =(id)=>{
    axios.delete(`http://localhost:5000/api/deleteProduct/${id}`)
      .then(()=>{
        alert("Deleted Succesfully")
      })
  }


  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first" href="#">
                Manage Car
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" href="#">
                Offerd Price
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Modal/>
              <div className="updv">
              <h2 className="excar">Existing Car</h2>

              {
                posts.map((data)=>{
                  const base64String = btoa(
                    String.fromCharCode(...new Uint8Array(data.img.data.data))
                  );
                  return (
                    <div className="post">
                    <h3 id="carname">{data.name}</h3>
                    <p id="carmodel">{data.model}</p>
                    <img id="image" src={`data:image/png; base64, ${base64String}`} width="200" height="100"/>
                    <button className="dbtn" onClick={()=>{
                      deleteCar(data._id)
                    }}>Delete</button>
                    </div>
                  )
                })
              }

              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <OfferTable/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default LeftTabsExample;
