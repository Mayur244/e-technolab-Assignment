// import React from 'react';

const Header = () => {
  return (
    <header className="bg-white text-black-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
      <img src="https://www.etechnolab.com/img/logo1.png" alt="eTechno Lab" className="mx-auto mb-4 h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:bg-gray-100 p-8">HOME</a></li>
            <li><a href="#" className="hover:bg-gray-100 p-8">SERVICES</a></li>
            <li><a href="#" className="hover:bg-gray-100 p-8">TECHNOLOGY</a></li>
            <li><a href="#" className="hover:bg-gray-100 p-8">COMPANY</a></li>
            <li><a href="#" className="hover:bg-gray-100 p-8">PORTFOLIO</a></li>
            <li><a href="#" className="hover:bg-gray-100 p-8">CONTACT US</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;