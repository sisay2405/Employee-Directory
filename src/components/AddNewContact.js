import React, { useState } from 'react';
import '../styles/AddNewContact.css';

import uploadImage from '../utils/uploadImage';
import * as filestack from 'filestack-js';
const client = filestack.init('AnTYECuyjSVyLV2q8u29vz');

export default function AddNewContact({ onNewContact }) {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [number, setNumber] = useState('');
	const [city, setCity] = useState('');
	const [image, setImage] = useState('');

	const imageUploader = (event) => {
		client.upload(event.target.value).then((data) => console.log(data));
	};

	/*


	Do you have any package for uploading files via React?
	*/

	// fr.readAsArrayBuffer(event.target.value);
	// fr.onload = function () {
	// 	// you can keep blob or save blob to another position
	// 	const blob = new Blob([fr.result]);

	// 	// url for download
	// 	const url = URL.createObjectURL(blob, { type: 'image/png' });

	// 	console.log(url);
	// };

	const submitHandler = (event) => {
		event.preventDefault();

		const newContact = {
			image,
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
					<label>Your Picture</label>
					<input type='file' onChange={imageUploader} />
				</div>
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
						type='email'
						placeholder='Email'
						onChange={(event) => setEmail(event.target.value)}
					/>
				</div>

				<div className='input-control'>
					<label>Phone</label>
					<input
						type='number'
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
			

				<div className='input-control'>
					<input type='submit' value='Submit' />
				</div>
			</form>
		</div>
	);
}
