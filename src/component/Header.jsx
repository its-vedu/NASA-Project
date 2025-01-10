// src/components/Header.jsx
import React from 'react';
import {Link} from 'react-router-dom'
const Header = () => {
  return <>
   
    <header className="bg-gray-500 text-white py-4 w-full mx-0">
      <div className="w-full flex justify-between items-center px-4">
        <div className="flex items-center">
          <img src="/public/rocket1.png" alt="Planet Explorer Logo" className="h-16 w-16 mr-4 bg-black rounded-full p-1" />
          <h1 className="font-bold text-3xl">Planet Shift</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li className="pr-16">
              <Link to="/" className=" transition ease-in-out duration-700 hover:text-orange-300 font-bold text-xl  p-2 rounded-xl ">Home</Link>
            </li>
            <li className="pr-16">
            <li className="pr-16">
              <Link to="#" className=" transition ease-in-out duration-700 hover:text-orange-300 font-bold text-xl  p-2 rounded-xl ">About</Link>
            </li>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <div className="flex justify-center lg:order-2  py-4">
                          <Link
                            to="mercury"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Mercury
                        </Link>
                        <Link
                            to="venus"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Venus
                        </Link>
                        <Link
                            to="earth"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Earth
                        </Link>
                        <Link
                            to="mars"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Mars
                        </Link>
                        <Link
                            to="jupiter"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Jupiter
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Saturn
                        </Link>
                        <Link
                            to="urenus"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Urenus
                        </Link>
                        <Link
                            to="neptune"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Neptune
                        </Link>
                        
                        
                    </div>
    </>
};

export default Header;