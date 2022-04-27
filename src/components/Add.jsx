// import React, { useState } from "react";
// import "../styles/AddNewContact.css";
// import { FaEye } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa";

// const AddNewContact = ({ onNewContact }) => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setphoneNumber] = useState("");
//   const [city, setCity] = useState("");
//   const [file, setFile] = useState();
//   const [show, setShow] = useState(false);

//   const submitHandler = (event) => {
//     event.preventDefault();
//     const newContact = { firstName, lastName, email, phoneNumber, city };
//     onNewContact({ ...newContact, file });

//     setFirstName("");
//     setLastName("");
//     setEmail("");
//     setEmail("");
//     setphoneNumber("");
//     setCity("");
//     setFile("");
//     setShow(!show);
//   };
//   const handleChange = (e) => {
//     console.log(e.target.files);
//     setFile(URL.createObjectURL(e.target.files[0]));
//   };

//   return (
 
//       <div>
//         <div className="header">Random Contact Lists</div>
//         <button type="button" onClick={() => setShow(!show)}>
//           {" "}
//           {show === true ? (
//             <FaEyeSlash size="2rem" />
//           ) : (
//             <FaEye size="2rem" />
//           )}{" "}
//           Add New Contact
//         </button>
//         {show && (
//           <div className="new-contact ">
//             {/* <div className="header">Random Contact Lists</div> */}
//             <form className="contact-form p-3" onSubmit={submitHandler}>
//               <div className="contact-lists  ">
//                 <div className="flex gap-5 m-auto">
//                   <div className="input-control">
//                     <label> First Name </label>
//                     <input
//                       type="text"
//                       placeholder="First Name"
//                       onChange={(e) => setFirstName(e.target.value)}
//                     />
//                   </div>
//                   <div className="input-control">
//                     <label> Last Name</label>
//                     <input
//                       type="text"
//                       placeholder="Last Name"
//                       onChange={(e) => setLastName(e.target.value)}
//                     />
//                   </div>
//                 </div>

//                 {/* <div className="flex gap-5 m-auto"> */}

//                   <div className="input-control">
//                     <label> Email </label>
//                     <input
//                       type="email"
//                       placeholder="Email"
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>
//                   <div className="input-control">
//                     <label> Phone Number </label>
//                     <input
//                       type="number"
//                       placeholder="Phone Number"
//                       onChange={(e) => setphoneNumber(e.target.value)}
//                     />
//                   </div>

//                 {/* </div> */}

//                 <div className="flex gap-5 m-auto">
//                   <div className="input-control">
//                     <label> City </label>
//                     <input
//                       type="text"
//                       placeholder="City"
//                       onChange={(e) => setCity(e.target.value)}
//                     />
//                   </div>
//                   <div className="imageUpload">
//                     <h2>Add Image:</h2>
//                     <input type="file"   onChange={handleChange} Required/>
//                     <img src={file} width="200px" />
//                   </div>
//                 </div>

//               </div>
//               <div className="Submit">
//                 <button
//                   className="btn"
//                   type="submit"
//                   disabled={
//                     !firstName || !lastName || !email || !phoneNumber || !city || !file
//                   }
//                   value="Submit"
//                 >
//                   {" "}
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}
//       </div>

//   );
// };
// export default AddNewContact;
