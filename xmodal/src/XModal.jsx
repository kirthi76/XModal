import React, { useState } from 'react';
import "./XModal.css";

const XModal = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    dob: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = e=>{
    e.preventDefault();
    let error = false;
    if(formData.phone.length !== 10){
        alert("Invalid phone number. Please enter a 10-digit phone number.");
        error = true;
    }
    if(new Date(formData.dob) > new Date()){
        alert("Invalid date of birth. Date of birth cannot be in future.");
        error = true;
    }

    if(!formData.email.includes("@")||!formData.email.includes(".")){
        alert("Invalid email. Please check your email address.");
        error = true;
    }
    
if(error) return;
setFormData({
        username: "",
        email: "",
        phone: "",
        dob: ""
    });
    setmodalOpen(false);

    

}

  return (
    <div className="modal-Container">
         <h1>User Details Modal</h1>
         <button onClick={()=> setmodalOpen(true)}>Open Form</button>
            {
                modalOpen
                ?
                <div className="modal" onClick={()=> setmodalOpen(prev=> !prev)}>
                    <div className="modal-content" onClick={e=> e.stopPropagation()}>
                        <h2>Fill Details</h2>
          <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Username:</label>
            <input type="text" id="username"  required value={formData.username} onChange={handleInputChange} />

            <label htmlFor='email'>Email Address:</label>
            <input type="email" id="email" required value={formData.email} onChange={handleInputChange} />

            <label htmlFor='phone'>Phone Number:</label>
            <input type="text" id="phone" required value={formData.phone} onChange={handleInputChange} />
            
            <label htmlFor='dob'>Date of birth:</label>
            <input type="date" id="dob"  required value={formData.dob} onChange={handleInputChange} />
            <button className='submit-button' type='submit'>Submit</button>
          </form>
        </div>
    
    </div>
    :
    null
            }
    </div>
  );
};

export default XModal;