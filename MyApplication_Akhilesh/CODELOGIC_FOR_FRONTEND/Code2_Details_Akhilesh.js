
                                // Contains all the deatils of Application

import React, { useState } from 'react';

// Actual Logic of Coding
const DetailsForm = ({ onSubmit }) => 
{
  const [weight, setWeight] = useState('');
  const [fastingBloodSugar, setFastingBloodSugar] = useState('');
  const [postprandialBloodSugar, setPostprandialBloodSugar] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [otherDiseases, setOtherDiseases] = useState('');
  const [date, setDate] = useState('');



  const handleFormSubmit = (e) => 
  {
    e.preventDefault();
    onSubmit({
      weight,
      fastingBloodSugar,
      postprandialBloodSugar,
      bloodPressure,
      otherDiseases,
      date,
    });



    // Attributes
    setWeight('');
    setFastingBloodSugar('');
    setPostprandialBloodSugar('');
    setBloodPressure('');
    setOtherDiseases('');

  };



  return (
    <form onSubmit={handleFormSubmit}>
      {}
    </form>
  );
};



const Details = () => 
{
  const handleSubmit = async (formData) => {
    // our logic here
    console.log('Form Data:', formData);
  };

  return (
    <div className="container mt-2 mb-2">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Details</div>
            <div className="card-body">
              <DetailsForm onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Details;

