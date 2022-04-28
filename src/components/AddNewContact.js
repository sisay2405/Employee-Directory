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
  const [showForm, setShowForm] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    const newContact = { firstName, lastName, email, phoneNumber, city };
    onNewContact({ ...newContact, file });

    setFirstName("");
    setLastName("");
    setEmail("");
    setEmail("");
    setphoneNumber("");
    setCity("");
    setFile("");
    setShowForm(!showForm);
  };
  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <div className="header"> Contact Lists</div>
      <button type="button" onClick={() => setShowForm(!showForm)}>
        {" "}
        {showForm === true ? (
          <FaEyeSlash size="2rem" />
        ) : (
          <FaEye size="2rem" />
        )}
        {" "}
        Add New Contact
      </button>
      {/* If showForm is true, the contact-form right after && will appear in the output. If it is false, React will ignore and skip it. */}
      {showForm && (
        <form className=" contact-form my-4 " onSubmit={submitHandler}>
          <div className="container text-center ">
            <div className="row">
              <div className="col">
                <div className="input-control">
                  <label> First Name </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col">
                <div className="input-control">
                  <label> Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col">
                <div className="input-control">
                  <label> Email </label>
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="col">
                <div className="input-control">
                  <label> Phone Number </label>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    onChange={(e) => setphoneNumber(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
                <div className="input-control">
                  <label> City </label>
                  <input
                    type="text"
                    placeholder="City"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
                <div className="imageUpload">
                  <h2>Add Image:</h2>
                  <input type="file" onChange={handleChange} />
                  <img src={file} width="100px" />
                </div>
              </div>
            </div>
          </div>
          <div className="Submit">
            <button
              className="btn"
              type="submit"
              disabled={
                !firstName || !lastName || !email || !phoneNumber || !city || !file
              }
              value="Submit"
            >
              {" "}
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
export default AddNewContact;
