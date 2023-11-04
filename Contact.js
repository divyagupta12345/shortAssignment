import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    Phonenumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '7rem auto',
    backgroundColor:'pink',
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    cursor:'pointer',
  };

  const inputStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor:'pointer',
  };

  const submitButtonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '20px',
  };


  return (
    <div style={formStyle}>
      <h1>Please Fill This Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:</label> <br/>
          <input type="text"
           name="name" 
           value={formData.name} 
           onChange={handleChange}
           style={inputStyle} />
        
        <br />
        <label>
          Phone Number: </label> <br/>
          <input type="number"
           name="number"
            value={formData.number}
             onChange={handleChange}
             style={inputStyle} />
        
        <br />
        <button type="submit"
        style={submitButtonStyle}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
