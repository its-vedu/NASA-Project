// src/components/Footer.jsx
import React from 'react';
import Chat from "./Chat.jsx"

const Footer = () => {
  return <>
    
    <footer className="bg-gray-800 text-white py-4 w-full mx-0  fixed bottom-0">
    
      <Chat></Chat>
      <div className="w-full text-center px-0 ">
        <p>© 2024 Planet Shift. </p>
        <p className="mt-2"></p>
      </div>
    </footer>
    </>
};

export default Footer;