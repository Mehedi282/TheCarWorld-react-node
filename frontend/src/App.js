import './App.css';
import React from 'react';
import {Switch, Route ,  BrowserRouter} from "react-router-dom"
import Collection from './pages/Collection';
import Frontpage from './pages/Frontpage';
import ProductScreen from './pages/ProductScreen';
import Showroom from './pages/Showroom';
import Contact from './pages/Contact';
import YourDreamCar from './pages/YourDreamCar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import Cardetails from './components/cardetails'

const App = () => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);


  return (

    <>
    {/* <p>{!data ? "Loading..." : data}</p> */}
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Frontpage}/>
        <Route exact path="/showroom" component={Showroom}/>
        <Route exact path="/collection" component={Collection}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path ="/product/:id" component={ProductScreen}/>
        <Route exact path="/dreamcar" component={YourDreamCar}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/cardetails/:id" component={Cardetails}/>




      </Switch>
      </BrowserRouter>
        </>


  );
}

export default App;
