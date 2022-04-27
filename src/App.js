import React from "react";
import { useEffect, useState } from "react";
import useFetch from "react-fetch-hook";
import ContactCards from "./components/ContactCards";
import AddNewContact from "./components/AddNewContact";

const App = () => {
  const url = "https://randomuser.me/api/";
  const { data } = useFetch(url + "?results=200");
  const [contactList, setContactList] = useState();
  const [filterQuery, setFilterQuery] = useState();
  const [cityFilterQ,setCityFilterQ] = useState();
  const [newContactForm, setNewContactForm] = useState(true);

  useEffect(() => {
    if (!filterQuery) {
      setContactList(data?.results?.slice(0, 10));
    } else {
		console.log('name')
		setCityFilterQ('')
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
	  console.log(filteredData)
      setContactList(filteredData);
    }


  }, [data, filterQuery]);

  useEffect(()=>{
	if(!cityFilterQ){
		console.log('there')

		setContactList(data?.results?.slice(0, 10));
	}else{

		console.log('filter')

		const queryString = cityFilterQ.toLowerCase();
		const filteredData = data?.results?.filter((contact) => {
		  const city = contact.location.city;
		  // if it's just one letter, return all names that start with it
		  if (queryString.length === 1) {
			const firstLetter = city.charAt(0).toLowerCase();
			return firstLetter === queryString;
		  } else {
			return city.toLowerCase().includes(queryString);
		  }
		});
		
		setContactList(filteredData);
	}
  },[data,cityFilterQ])

  const newContactHandler = (newContact) => {
    console.log(newContact);

    const contact = {
      picture: {
        large: newContact?.file,
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

    return setNewContactForm(false);
  };
  return (
    <div className={"bg-green-100"}>
      <section>
        {<AddNewContact onNewContact={newContactHandler} />}

        {!newContactForm && (
          <div style={{ textAlign: "center" }}>
          </div>
        )}
        <div>
        </div>
        <form>
          <div className="Filters">
            <input
              type={"text"}
              placeholder={"Filter by Name"}
              onChange={(event) => setFilterQuery(event.target.value)}
              className={"ml-20 mt-6 rounded-md p-2"}
            />

			<input
              type={"text"}
              placeholder={"Filter by City"}
              onChange={(event) => setCityFilterQ(event.target.value)}
              className={"ml-20 mt-6 rounded-md p-2"}
            />
          </div>
        </form>
      </section>
      <section className={"grid sm:grid-cols-2 md:grid-cols-4 gap-6 p-20"}>
        {contactList?.length < 1 && <h1>No data matches your search</h1>}
        <ContactCards contactList={contactList} />
      </section>
    </div>
  );
};

export default App;
