// import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg">
          &copy; 2025 eTechnolab. All rights reserved.
        </p>
        <p className="mt-2 text-sm">
          Pune, India |{' '} <a href="#" className="hover:text-blue-400">Privacy Policy</a> |{' '}
          <a href="#" className="hover:text-blue-400">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;