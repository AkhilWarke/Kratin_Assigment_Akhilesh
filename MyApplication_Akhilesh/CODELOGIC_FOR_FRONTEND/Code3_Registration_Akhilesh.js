
                                       // Registration Detail of Application

import React, { useState } from 'react';


// Actual Logic of Coding                                      
const RegistrationForm = () => 
{
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventName: '',
    details: '',
});


const handleInputChange = (e) => 
{
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
};


const handleSubmit = async (e) => 
{
    e.preventDefault();


    const registrationData = { ...formData };

    try 
    {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: 
        {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });



      if (response.ok) 
      {

        console.log('Registration successful');
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventName: '',
          details: '',
        });

      } 
      
        else 
        {
        console.log('Registration failed');
        }
    } 

    catch (error) 
    {
      console.error('Error registering:', error);
    }


  };



  return (
    <form onSubmit={handleSubmit}>


      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>


      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />


      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone:
        </label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
      </div>


      <div className="mb-3">
        <label htmlFor="eventName" className="form-label">
          Event Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="eventName"
          name="eventName"
          value={formData.eventName}
          onChange={handleInputChange}
          required
        />
      </div>


      <div className="mb-3">
        <label htmlFor="details" className="form-label">
          Details:
        </label>
        <textarea
          className="form-control"
          id="details"
          name="details"
          value={formData.details}
          onChange={handleInputChange}
          required
        />
      </div>


      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;

