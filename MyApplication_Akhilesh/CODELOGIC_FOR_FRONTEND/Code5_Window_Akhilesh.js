

                                       // Footer of Application

import React from 'react';

// Actual Logic of Coding
const Footer = () => 
{

  const currentYear = new Date().getFullYear();

  return (

    <footer className="bg-dark text-light text-center py-4">
      <div className="container">
        <p>&copy; {currentYear} Soul-mate. All rights reserved.</p>
        <p>123 Main Street, Cityville, Country</p>
      </div>
    </footer>

  );

};

export default Footer;

