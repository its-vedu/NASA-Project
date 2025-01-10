import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, useTexture } from '@react-three/drei';

function TexturedSphere() {
  // Load texture using useTexture hook
  const texture = useTexture('./public/mars.jpg'); // Replace with your texture path

  return (
    <Sphere args={[1, 64, 64]} scale={2}> {/* args are [radius, widthSegments, heightSegments] */}
      <meshStandardMaterial map={texture} />
    </Sphere>
  );
}

function Mars() {
  return <>
  <div className="flex">
    
  <div className="flex-1 text-white p-4">
  <p>Diameter: 6,779 km.</p>
  <p>Mass: 6.4171 × 10^23 kg</p>
  <p>Surface Area: 144.8 million km²</p>
  <p>Mass: 6.4171 × 10^23 kg</p>
  <p>Surface Area: 144.8 million km²</p>
  <p>Gases:</p>
  <p>Carbon Dioxide (CO₂): 95.32%</p>
  <p>Nitrogen (N₂): 2.7%</p>
  <p>Argon (Ar): 1.6%</p>
  <p>Oxygen (O₂): 0.13%</p>
  <p>Carbon Monoxide (CO): 0.08%</p>
  <p>Water Vapor (H₂O): 0.03% (varies with location and season)</p>
  <p>Neon (Ne): 0.00025%</p>
  <p>Krypton (Kr): 0.00003%</p>
  <p>Xenon (Xe): 0.000008%</p>
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

export default Mars;
