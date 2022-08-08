import  "../components/style/product-s.css" 
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Vdetailtable from '../components/Vdetailtable';
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox';
import { NavLink } from 'react-router-dom';
import {CurrencyDollarIcon} from "@heroicons/react/outline"
import { detailsProduct } from '../actions/productActions';
import {useSelector, useDispatch} from 'react-redux';
import Footer from "../components/Footer";


export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector((state) => state.productDetails);
    const {loading, error, product} = productDetails

    useEffect(()=>{
        dispatch(detailsProduct(productId));
    },[dispatch, productId])


    return (
        <div>
        {loading ?(
            <LoadingBox></LoadingBox>
        ): error ? (
            <MessageBox variant="danger">{error}</MessageBox>
        ):(

        <div className='main-s'>
        <div className='bg-cover '>
          </div>
            <Navbar />
            <div className='container product-sep mobile-set'>
                <div className='row '>
                    <h1 className='p-name'> {product.name}</h1>
                    <div className='col-8 p-img'>
                        <img className='main-img' src={product.image} alt="" />
                </div>
                <div className='col-3 col- rightbar'>
                     <h1 className='r-price'>{product.price}</h1>
                      <NavLink to="/contact"><h4 className='offer'>MAKE AN OFFER PRICE <CurrencyDollarIcon className='d-icon'/></h4></NavLink>
                <div className='p-3 card-bg'>
                    <h2 className='py-3  text-light'>Car Details</h2>
                    <div className=' details'>
                    <p> <span className='L'>Body</span>
                    <span className="R">{product.body}</span> </p>
                    <hr className='w-100 text-secondary '></hr>
                    <p> <span className='L'>Mileage</span>
                    <span className="R">{product.mileage}</span> </p>
                    <hr className='w-100 text-secondary'></hr>
                    <p> <span className='L'>Fuel Type</span>
                    <span className="R">{product.fuel}</span> </p>
                    <hr className='w-100 text-secondary'></hr>
                    <p> <span className='L'>Transmission</span>
                    <span className="R">{product.transmission}</span> </p>
                    <hr className='w-100 text-secondary'></hr>
                    <p> <span className='L'>Drive</span>
                    <span className="R">{product.drive}</span> </p>
                    <hr className='w-100 text-secondary'></hr>
                    <p> <span className='L'>Exterior Color</span>
                    <span className="R">{product.eColor}</span> </p>
                    <hr className='w-100 text-secondary'></hr>
                    </div>
                </div>
                   
                </div>
                </div>
                <div className=' image-set'>
                    <img src={product.image3} alt=''/>
                    <img src={product.image2} alt=''/>
                    <img src={product.image1} alt=''/>
                    <img src={product.image} alt=''/>
                    <img src={product.image} alt=''/>
                </div>
                <Vdetailtable products ={product}/>
            </div>
        </div>
        )}
        <Footer/>
        </div>
    )
}
