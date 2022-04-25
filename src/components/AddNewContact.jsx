import React, { useState } from "react";
import "../styles/AddNewContact.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const AddNewContact = ({ onNewContact }) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setphoneNumber] = useState("");
	const [city, setCity] = useState("");
	const [file, setFile] = useState();
	const [show, setShow] = useState(false)

	const submitHandler = (event) => {
		event.preventDefault();
		const newContact = { firstName, lastName, email, phoneNumber, city };
		onNewContact(newContact);
	};
	const handleChange = (e) => {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}

	return (
		<div>
		
			{/* <div>
				<FaReact  color= "green" size = '2rem'/> <p> Sisay and Wosen</p>
			</div> */}
			<div>
				<div className="header">Random Contact Lists</div>
				<button type="button" onClick={() => setShow(!show)}>  {show === true ? <FaEyeSlash size = '2rem'/> : <FaEye size = '2rem'/> } Add New Contact</button>
				{show && <div className="new-contact ">
					{/* <div className="header">Random Contact Lists</div> */}
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
									type="text" required
									placeholder="Email"
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="input-control">
								<label> Phone Number </label>
								<input
									type="text" required
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
							<input type="file" onChange={handleChange} />
							<img src={file} />
						</div>
						<div className="Submit">
							{/* style={{ backgroundColor: bgcolor }} */}
							<button className="btn" type="submit" disabled={!firstName || !lastName || !email || !phoneNumber || !city} value="Submit"> Submit</button>
						</div>
					</form>
				</div>}

			</div>
		</div>
	);
}
export default AddNewContact