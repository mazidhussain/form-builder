import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Form Builder. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400 transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400 transition-colors duration-300">Terms of Service</a>
          <a href="#" className="hover:text-gray-400 transition-colors duration-300">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
