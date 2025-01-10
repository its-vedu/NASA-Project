import React from 'react';

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">About the Solar System Explorer</h1>
      <p className="text-lg max-w-xl text-center">
        This project simulates the solar system where you can interact with different planets and explore space. 
        The planets rotate around the sun and you can select individual planets for more details.
      </p>
    </div>
  );
}

export default About;
