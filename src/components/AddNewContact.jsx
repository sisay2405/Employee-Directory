import React, { useState } from 'react';
import '../styles/AddNewContact.css';

export default function AddNewContact({ onNewContact }) {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [number, setNumber] = useState('');
	const [city, setCity] = useState('');

	const submitHandler = (event) => {
		event.preventDefault();

		const newContact = {
			firstName,
			lastName,
			email,
			phone,
			number,
			city,
		};

		onNewContact(newContact);
	};

	return (
		<div className='new-contact'>
			<form onSubmit={submitHandler}>
				<div className='input-control'>
					<label>First Name</label>
					<input
						type='text'
						placeholder='first Name'
						onChange={(event) => setFirstName(event.target.value)}
					/>
				</div>
				<div className='input-control'>
					<label>Last Name</label>
					<input
						type='text'
						placeholder='Last Name'
						onChange={(event) => setLastName(event.target.value)}
					/>
				</div>

				<div className='input-control'>
					<label>Email</label>
					<input
						type='text'
						placeholder='Email'
						onChange={(event) => setEmail(event.target.value)}
					/>
				</div>

				<div className='input-control'>
					<label>Phone</label>
					<input
						type='text'
						placeholder='Phone Number'
						onChange={(event) => setNumber(event.target.value)}
					/>
				</div>

				<div className='input-control'>
					<label>City</label>
					<input
						type='text'
						placeholder='City'
						onChange={(event) => setCity(event.target.value)}
					/>
				</div>
				{/* <div className='input-control'>
					<label>City</label>
					<input
						type='text'
						placeholder='school'
						onChange={(event) => setCity(event.target.value)}
					/>
				</div> */}

			


				<div className='input-control'>
					<input type='submit' value='Submit' />
				</div>
			</form>
		</div>
	);
}
