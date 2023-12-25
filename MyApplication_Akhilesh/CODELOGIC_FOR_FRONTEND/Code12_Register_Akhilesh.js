
                                          // Signup
                                         
import React, { useState } from 'react';

// Actual Logic of Coding
const SignupForm = () => 
{
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    emergencyNumber: '',
    age: '',
    gender: '',
    bloodGroup: '',
    height: '',
    diabetes: false,
    bloodPressure: false,
  });


  const handleChange = (e) => 
  {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();

    console.log(formData);

    
    try 
    {
      const response = await fetch('http://localhost:9191/user/signup', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) 
      {
        // Sign-up Done
        alert('Signup successful....');
        window.open('/', '_self');
      }

      else 
      {
        // Sign-up failed
        alert('Signup failed...');
        window.open('/signup', '_self');
      }
    } 

    catch (error) 
    {
 
      alert('Signup failed... NETWORK ERROR');
      window.open('/signup', '_self');
    }

  };

  return (
    <div className="container mt-2 mb-2">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Signup</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* ... other form fields ... */}
                <div className="mb-3">
                  <label className="form-label">Diseases</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="disease1"
                      checked={formData.diabetes}
                      onChange={handleChange}
                      name="diabetes"
                    />

                    <label className="form-check-label" htmlFor="disease1">
                      Diabetes
                    </label>


                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="disease2"
                      checked={formData.bloodPressure}
                      onChange={handleChange}
                      name="bloodPressure"
                    />
                    <label className="form-check-label" htmlFor="disease2">
                      Blood Pressure
                    </label>
                  </div>


                </div>


                <button type="submit" className="btn btn-primary">
                  Signup
                </button>


              </form>

            </div>

            <div className="card-footer text-center">
              Already have an account? <a href="/">Login</a>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;

