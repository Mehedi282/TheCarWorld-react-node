import "../components/style/login.css"
import Car from '../components/assets/bg.jpg'
import React, {useState} from 'react'

export default function Login(props) {
  const [username, setusername]=useState('')
  const [password, setpassword]=useState('')


  const submitHandler =()=>{
       alert(username+password)
       console.log(username+password)  
  }


    return (
      <div class="imgb">
      <img class="carimage" src={Car} />
      <div class="text-block">
         <h1>The Car World</h1>
     </div>

      <div class="text-block1">
       <h2>Admin Signin</h2>
        <input placeholder="Username" onChange={(e)=>{setusername(e.target.value)}}/><br/>
        <input placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}}/><br/>

        <button onClick={submitHandler}>Login</button>

      </div>


      </div>
    )
}
