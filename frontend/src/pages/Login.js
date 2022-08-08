import React, { useEffect, useState } from 'react'
import { UserIcon, KeyIcon } from "@heroicons/react/outline"
import { NavLink } from 'react-router-dom'
import "../components/style/login.css"
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../actions/userActions'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const redirect = props.location.search ?
        props.location.search.split('=')[1] : '/dashboard';


    const userSignin = useSelector((state) => (state.userSignin));
    const { userInfo, loading, error } = userSignin
    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password))
    }
    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect);
        }
    },[ props.history,redirect, userInfo]);


    return (
        <div className='bg-log'>
            <div className='bg-cover'>
            </div>

            <div className="logo  p-3">
                <NavLink to="/">
                    <h2>
                        <span>T</span>he <span>W</span>orld
                        <span>C</span>ar
                    </h2>
                </NavLink>
            </div>
            <div className="container-log">
                <div className="d-flex justify-content-center h-100">
                    <div className="card-log py-3">
                        <div className="card-header  text-center">
                            <h2> Admin Sign In</h2>
                        </div>
                        {loading && <LoadingBox></LoadingBox>}
                        {error && <MessageBox variant='danger'>{error}</MessageBox>}
                        <div className="card-body">
                            <form onSubmit={submitHandler}>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><UserIcon className='icons-log' /></span>
                                    </div>
                                    <input type="email" className="form-control" placeholder="username"
                                        id='email' required onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="input-group form-group my-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><KeyIcon className='icons-log' /></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="password"
                                        id='password' required onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="row my-4 align-items-center remember">
                                    {/* <input type="checkbox " />Remember Me */}
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Login" className="  btn-login login_btn" />
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
