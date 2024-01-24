import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 py-4 text-center flex justify-center items-center space-x-2">
      <p className="text-sm text-gray-600">&copy; {currentYear}</p>
      <a className="hover:underline" href="https://devlaukey.netlify.app/">DevLaukey</a>
      <p>All rights reserved.</p>
    </footer>
  );
};

export default Footer;
