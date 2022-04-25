import {useEffect, useState } from 'react';
import useFetch from 'react-fetch-hook';
import ContactCards from './components/ContactCards';
import AddNewContact from './components/AddNewContact';
// import { FaEyeSlash } from "react-icons/fa";
// import { FaEye } from "react-icons/fa";

const App = () => {
	const url = 'https://randomuser.me/api/';
	const { data } = useFetch(url + '?results=200');
	const [contactList, setContactList] = useState();
	const [filterQuery, setFilterQuery] = useState();
	const [newContactForm, setNewContactForm] = useState(true);
	// const [show, setShow] = useState(false)
	useEffect(() => {
		if (!filterQuery) {
			setContactList(data?.results?.slice(0, 10));
		} else {
			const queryString = filterQuery.toLowerCase();
			const filteredData = data?.results?.filter((contact) => {
				const fullName = `${contact.name.first} ${contact.name.last}`;
				// if it's just one letter, return all names that start with it
				if (queryString.length === 1) {
					const firstLetter = fullName.charAt(0).toLowerCase();
					return firstLetter === queryString;
				} else {
					return fullName.toLowerCase().includes(queryString);
				}
			});
			setContactList(filteredData);
		}
	}, [data, filterQuery]);

	const newContactHandler = (newContact) => {
		 console.log(newContact);

		const contact = {
			picture: {
				large: 'https://randomuser.me/api/portraits/men/3.jpg',
				large:'' 
			},
			name: {
				last: newContact.lastName,
				first: newContact.firstName,
			},
			email: newContact.email,
			cell: newContact.number,
			location: {
				city: newContact.city,
			},
		};
		setContactList((prev) => {
			return [contact, ...prev];
		});

		setNewContactForm(false);
	};
	return (
		<div className={'bg-gray-100'}>
			<section>
			

				{ <AddNewContact onNewContact={newContactHandler} />}

				{!newContactForm && (
					<div style={{ textAlign: 'center' }}>
							<div className='header'>Random Contact Lists</div>
											{/* <button type="button" onClick={() => setShow(!show)}>  {show === true ? <FaEyeSlash size = '2rem'/> : <FaEye size = '2rem'/> } Add New Contact</button> */}

						<button className='addNewcontact' type='button' onClick={() => setNewContactForm(true)}>
							{' '}
							Add New Contact
						</button>
					</div>
				)}
				<div>
				{/* <div className="header">Random Contact Lists</div> */}
				</div>
					<form>
					<div className='Filters'>
					<input
						type={'text'}
						placeholder={'Filter by Name'}
						onChange={(event) => setFilterQuery(event.target.value)}
						className={'ml-20 mt-6 rounded-md p-2'}
					/>
				
					<input
						type={'text'}
						placeholder={'Filter by city'}
						onChange={(event) => setFilterQuery(event.target.value)}
						className={'ml-20 mt-6 rounded-md p-2'}
					/>
				
					</div>
				</form>
			</section>
			<section className={'grid sm:grid-cols-2 md:grid-cols-4 gap-6 p-20'}>
				{contactList?.length < 1 && <h1>No data matches your search</h1>}
				<ContactCards contactList={contactList} />
			</section>
		</div>
	);
};

export default App;
