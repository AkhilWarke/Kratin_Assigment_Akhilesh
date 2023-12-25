
                                         
                                         // Entry Details or Login details
                                       
import React, { useState } from 'react';

// Actual Logic of Coding
const LoginForm = () => 
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => 
  {
    e.preventDefault();

    try 
    {

      const response = await fetch('http://localhost:9191/user/login', 
      {
        method: 'POST',

        headers: 
        {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail: email, userPassword: password }),

      });

      if (response.ok) 
      {
        const data = await response.json();
        sessionStorage.setItem('userData', JSON.stringify(data));
        console.table(data);
        alert("Login successful....");
        window.open("/home", "_self");
      }



     else 
     {
        const errorData = await response.json();
        alert(errorData);
        window.open("/", "_self");
      }


    } 
    
    catch (error) 
    {
      alert(error);
      window.open("/", "_self");
    }


  };

  return (
    <div className="container mt-2 mb-2">


      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>


                <div className="mb-3">


                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your registered email"
                    required
                  />
                </div>



                <div className="mb-3">

                    
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>


                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>


            </div>
            <div className="card-footer text-center">
              Don't have an account? <a href="/signup">Sign up</a>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default LoginForm;




                                    


                                    
