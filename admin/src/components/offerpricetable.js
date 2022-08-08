import Table from 'react-bootstrap/Table';
import axios from 'axios'
import {useState, useEffect} from 'react'

function DarkExample() {
  const [offers, setOffers] = useState([]);

  const API_URL = 'http://localhost:5000/api/fetchOffer';

  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setOffers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Offered Price</th>
        </tr>
      </thead>


      <tbody>
      {
        offers.map((offer)=>{
          return(
            <tr>
              <td>{offer.name}</td>
              <td>{offer.email}</td>
              <td>{offer.phone}to</td>
              <td>{offer.offerprice}</td>
            </tr>
          )
        })
      }

      </tbody>

    </Table>
  );
}

export default DarkExample;
