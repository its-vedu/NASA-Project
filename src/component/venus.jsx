import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, useTexture } from '@react-three/drei';

function TexturedSphere() {
  // Load texture using useTexture hook
  const texture = useTexture('./public/venus.jpg'); // Replace with your texture path

  return (
    <Sphere args={[1, 64, 64]} scale={2}> {/* args are [radius, widthSegments, heightSegments] */}
      <meshStandardMaterial map={texture} />
    </Sphere>
  );
}

function Venus() {
  return <>
  <div className="flex">
  <div className="flex-1 text-white p-4">
  <p>Diameter: 12,104 km</p>
  <p>Mass: 4.867 × 10^24 kg</p>
  <p>Surface Area: 460.2 million km² </p>
  <p>Gravity: 8.87 m/s² </p>
  <p>Orbital Period (Venusian Year): 225 Earth days</p>
  <p>Day Length (Venusian Day): 243 Earth days </p>
  <p>.
  Surface Temperature: Constantly around 465°C </p>
  <p>Distance from the Sun: 108.2 million km</p>
  <p>Gases</p>
  <p>Carbon Dioxide (CO₂): 96.5%</p>
  <p>Nitrogen (N₂): 3.5%</p>
  <p>Sulfur Dioxide (SO₂): 0.015%</p>
  <p>Water Vapor (H₂O): 0.002%
  </p>
  <p>Argon (Ar): 0.007%</p>
  <p>Carbon Monoxide (CO): 0.0017%</p>
  <p>Neon (Ne): 0.0007%</p>
  </div>
    <div style={{ height: '60vh', width: '90vh' }} className='flex-1'>
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

export default Venus;
