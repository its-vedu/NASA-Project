import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, useTexture } from '@react-three/drei';

function TexturedSphere() {
  // Load texture using useTexture hook
  const texture = useTexture('./public/jupiter.jpg'); // Replace with your texture path

  return (
    <Sphere args={[1, 64, 64]} scale={2}> {/* args are [radius, widthSegments, heightSegments] */}
      <meshStandardMaterial map={texture} />
    </Sphere>
  );
}

function Jupiter() {
  return<>
  <div className="flex">
     <div className="flex-1 text-white p-4">
    <p>Diameter: 139,820 km</p>
    <p>Mass: 1.898 × 10^27 kg</p>
    <p>Surface Area: 61.42 billion km²</p>
    <p>Gravity: 24.79 m/s² </p>
    <p>Orbital Period (Jovian Year): 11.86 Earth years.</p>
    <p>Day Length: 9 hours, 56 minutes </p>
    <p>Average Surface Temperature: -145°C </p>
    <p>Distance from the Sun: 778.5 million km</p>
    <p>Gases</p>
    <p>Hydrogen (H₂): 89.8%</p>
    <p>Helium (He): 10.2%</p>
    <p>Methane (CH₄): 0.3%</p>
    <p>Ammonia (NH₃): 0.026%</p>
    <p>Hydrogen Deuteride (HD): 0.003%</p>
    <p>Ethane (C₂H₆): 0.0004% </p>
    <p>Phosphine (PH₃): Trace amounts.</p>
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

export default Jupiter;
