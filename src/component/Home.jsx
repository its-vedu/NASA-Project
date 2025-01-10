import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Solar System Explorer</h1>
      <Link to="/solar" className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600">
        Explore the Solar System
      </Link>
    </div>
  );
}

export default Home;
