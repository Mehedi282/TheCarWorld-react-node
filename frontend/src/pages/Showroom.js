import React, { useState, useEffect, useRef } from 'react'
import Pricebar from "../components/Pricebar"
import Navbar from '../components/Navbar'
import "../components/style/Rbar.css"
import ShowPro from '../components/ShowPro';
import 'rc-slider/assets/index.css';
import { ChevronDownIcon } from "@heroicons/react/solid"
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions'
import MessageBox from '../components/MessageBox';
import Slider from 'rc-slider';
import Footer from '../components/Footer';
import ShowromCar from '../components/showroomcar.js'


const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range)

function Showroom() {
    const [make, setMake] = useState("")
    const makeChoose = [
        'Audi',
        'BMW',
        'Flat',
        'Fort',
        'Honda',
        'Marcedez-Benz',
        'Chevrolet',
        'Hyundai',
        'Isuzu',
        'Jeep',
        'Kia',
        'Land Rover',
        'Mahindra',
        'Maserati',
        'Mazda',
        'Mini',
        'Nissan',
        'Porsche',
        'Suzuki',
        'Number',
        'Toyota',
        'VW',
        'VW GTI'
    ]
    const [condition , setCondition]= useState('')
    const conditionChoose = [
        'Used',
        'Certified Used',
        'New',
        'Other'
    ]
    // const keyword = match.params.keyword
    const { products } = useSelector((state) => state.productList);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProducts(make));
    }, [dispatch, make])

    const ref = useRef(null);
    // const [items, setItems] = useState(products)
    const [toggle, setToggle] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    // const [toggle3, setToggle3] = useState(false)
    // const [toggle4, setToggle4] = useState(false)
    // const [toggle5, setToggle5] = useState(false)
    // const [toggle6, setToggle6] = useState(false)



    const handleUser = () => {
        toggle ? setToggle(false) : setToggle(true);
    }
    const handleUser2 = () => {
        toggle2 ? setToggle2(false) : setToggle2(true);
    }
    // const handleUser3 = () => {
    //     toggle3 ? setToggle3(false) : setToggle3(true);
    // }
    // const handleUser4 = () => {
    //     toggle4 ? setToggle4(false) : setToggle4(true);
    // }
    // const handleUser5 = () => {
    //     toggle5 ? setToggle5(false) : setToggle5(true);
    // }
    // const handleUser6 = () => {
    //     toggle6 ? setToggle6(false) : setToggle6(true);
    // }

    useEffect(() => {
        document.addEventListener('click', close)
        return () => document.removeEventListener("click", close);
    }, []);
    function close(e) {
        setToggle(e && e.target === ref.current)
    }

    return (
        <div>
            <div className='main-s'>
                <div className='bg-cover'>
                </div>
                <Navbar />

                <div className='container showroom-c '>
                    <div className='row'>
                        <div className='col-4 col-md-3'>
                            <div className=" rightbar-sr">

                                <h2 className='text-center search-head'> <img className='w-25' src='searching.png' alt="" /> Search Options</h2>


                                <div className=' w-100 c-btn'>
                                    <button className='btn-d ' onClick={handleUser} ref={ref}>
                                        Make
                                        <ChevronDownIcon className='mob-user-icon arrow' />
                                    </button>
                                    <div className={toggle ? 'dropdown-menu' : 'hidden'}>
                                        <ul className='user-dropdown-s  list-unstyled text-dark  '>
                                            {makeChoose.map(make => (
                                                <li key={make}
                                                    onClick={() => setMake(make)}>{make}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className=' w-100 c-btn'>
                                    <button className='btn-d ' onClick={handleUser2} >
                                        Condition
                                        <ChevronDownIcon className='mob-user-icon arrow' />
                                    </button>
                                    <div className={toggle2 ? 'dropdown-menu' : 'hidden'}>
                                        <ul className='user-dropdown-s  list-unstyled text-dark  '>
                                            {conditionChoose.map(condition => (
                                                <li key={condition}
                                                    onClick={() => setCondition(condition) && setToggle(false)}>{condition}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>


                                <Pricebar />
                                <NavLink to="/contact">
                                    <button>RESET ALL</button>
                                </NavLink>
                            </div>
                        </div>

                        <div className='col-6 s-pro col-md-9'>
                            <h1 className='heading-s text-light'>Showroom Vehicles</h1>
                            <hr style={{ width: "100%" }} />
                            <div className="showroomd">
                            <ShowromCar/>
                            </div>

                        </div>

                    </div>

                </div>
                <div className='absolute'>
                    <Footer />

                </div>
            </div>
        </div>
    )
}

export default Showroom;
