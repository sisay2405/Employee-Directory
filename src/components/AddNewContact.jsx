import React, { useState } from "react";
import "../styles/AddNewContact.css";

const AddNewContact =({ onNewContact }) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setphoneNumber] = useState("");
	const [city, setCity] = useState("");
	const [file, setFile] = useState();

	const submitHandler = (event) => {
		event.preventDefault();
		const newContact = { firstName, lastName, email, phoneNumber, city };
		onNewContact(newContact);
	};
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}
	return (
		<div className="new-contact ">
			<div className="header">Random Contact Lists</div>
			<form className="contact-form  " onSubmit={submitHandler}>
				<div className="contact-lists ">
					<div className="input-control">
						<label> First Name </label>
						<input
							type="text" required
							placeholder="First Name"
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className="input-control">
						<label> Last Name</label>
						<input
							type="text" required
							placeholder="Last Name"
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
					<div className="input-control">
						<label> Email </label>
						<input
							type='email'
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="input-control">
						<label> Phone Number </label>
						<input
							type= 'number'
							placeholder="Phone Number"
							onChange={(e) => setphoneNumber(e.target.value)}
						/>
					</div>
					<div className="input-control">
						<label> City </label>
						<input
							type="text" required
							placeholder="City"
							onChange={(e) => setCity(e.target.value)}
						/>
					</div>
				</div>
				<div className="imageUpload">
					<h2>Add Image:</h2>
					<input type="file" required onChange={handleChange} />
					<img src={file} />
				</div>
				<div className="Submit">
					<input type="submit" value="Submit" />
				</div>
			</form>
		</div>
	);
}
export default AddNewContact