import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="bg-gray-200 py-4 text-center">
        <p className="text-sm text-gray-600">
          &copy; {currentYear}
                <a href="https://devlaukey.netlify.app/">
                DevLaukey
                </a>
                All
          rights reserved.
        </p>
      </footer>
    );
};

export default Footer;
