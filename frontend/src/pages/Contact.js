import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Navbar from "../components/Navbar"
import { UserIcon, InboxIcon, PhoneIcon, ChatIcon } from "@heroicons/react/outline"
import MetaData from '../components/MetaData';
import Footer from '../components/Footer' 

function Contact() {
	const history = useHistory();
	const [user, setUser] = useState({
		name: "", email: "", phone: "", message: ""
	});
	let name, value
	const handleInput = (e) => {
		console.log(e)
		name = e.target.name;
		value = e.target.value;
		setUser({ ...user, [name]: value })
	}

	const PostData = async (e) => {
		e.preventDefault()
		const { name, email, phone, message } = user
		const res = await fetch('/contact', {
			method: "POST",
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify({
				name, email, phone, message

			})
		})
		const data = await res.json()
		if (res.status === 422 || !data) {
			window.alert("Individual Data");
			console.log("individual data");
		} else {
			window.alert("Data succesful");
			console.log("data succesful");
			history.push('/contact')
		}
	}
	return (
		<>
		<div className='main-s'>
			<MetaData title={'Contact Us'} />
			<div className='bg-cover'>
			</div>
			<Navbar />



			<div className="container-contact100 ">
				<div className="wrap-contact100">
					<form method='POST' className="contact100-form validate-form">
						<span className="contact100-form-title text-light">
							Get in Touch
						</span>

						<div className="wrap-input100 validate-input" data-validate="Name is required">
							<UserIcon className='c-icon' />
							<input className="input100" id="name" type="text" name="name" placeholder="Name"
								value={user.name}
								onChange={handleInput} />
							<label className="label-input100" htmlFor="name">
								<span className="lnr lnr-user"></span>
							</label>
						</div>

						<div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
							<InboxIcon className='c-icon' />
							<input className="input100" id="email" type="text" name="email" placeholder="Email"
								value={user.email}
								onChange={handleInput} />
							<label className="label-input100" htmlFor="email">
								<span className="lnr lnr-envelope"></span>
							</label>
						</div>

						<div className="wrap-input100 validate-input" data-validate="Phone is required">
							<PhoneIcon className='c-icon' />
							<input className="input100" id="phone" type="text" name="phone" placeholder="Phone"
								value={user.phone}
								onChange={handleInput} />
							<label className="label-input100" htmlFor="phone">
								<span className="lnr lnr-phone-handset"></span>
							</label>
						</div>

						<div className="wrap-input100 validate-input" data-validate="Message is required">
							<ChatIcon className='c-icon-m' />
							<textarea className="input100" name="message" placeholder="Your message..."
								value={user.message}
								onChange={handleInput}></textarea>
						</div>

						<div className="contact100-form-checkbox">
							<input className="input-checkbox100" id="ckb1" type="checkbox" name="copy-mail" />
							<label className="label-checkbox100 text-secondary" htmlFor="ckb1">
								Send copy to my-email
							</label>
						</div>

						<div className="container-contact100-form-btn">
							<div className="wrap-contact100-form-btn">
								<div className="contact100-form-bgbtn"></div>
								<button type='submit' value="Send Email" onClick={PostData} className="contact100-form-btn">
									Send Email
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<div className='absolute-contact'>
		<Footer/>
		</div>
		</>
	)
}

export default Contact
