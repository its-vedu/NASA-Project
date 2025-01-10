import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, useTexture } from '@react-three/drei';

function TexturedSphere() {
  // Load texture using useTexture hook
  const texture = useTexture('./public/neptune.jpg'); // Replace with your texture path

  return (
    <Sphere args={[1, 64, 64]} scale={2}> {/* args are [radius, widthSegments, heightSegments] */}
      <meshStandardMaterial map={texture} />
    </Sphere>
  );
}

function Neptune() {
  return<>
  <div className="flex">
  <div className="flex-1 text-white p-4">
    <p>Diameter: 49,244 km</p>
    <p>Mass: 1.024 × 10^26 kg</p>
    <p>Surface Area: 7.618 billion km² </p>
    <p>Gravity: 11.15 m/s² </p>
    <p>Orbital Period (Neptunian Year): 164.8 Earth years.</p>
    <p>Day Length: 16 hours.</p>
    <p>Average Surface Temperature: -214°C</p>
    <p>Distance from the Sun: 4.5 billion km</p>
    <p>Gases</p>
    <p>Hydrogen (H₂): 80%</p>
    <p>Helium (He): 19%</p>
    <p>Methane (CH₄): 1.5%</p>
    </div> 
    <div style={{ height: '60vh', width: '90vh' }} className="flex-1">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} />
        {/* Textured sphere component */}
        <TexturedSphere />
        <OrbitControls enableZoom={true} minDistance={3} maxDistance={10} />
      </Canvas>
    </div>
    </div>
    </>
}

export default Neptune;
