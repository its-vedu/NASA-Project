import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, useTexture } from '@react-three/drei';

function TexturedSphere() {
  // Load texture using useTexture hook
  const texture = useTexture('./public/mercury.jpg'); // Replace with your texture path

  return (
    <Sphere args={[1, 64, 64]} scale={2}> {/* args are [radius, widthSegments, heightSegments] */}
      <meshStandardMaterial map={texture} />
    </Sphere>
  );
}

function Mercury() {
  return <>
  <div className="flex">
  <div className="flex-1 text-white p-4">
  <p>Diameter: 4,880 km</p>
  <p>Mass: 3.3011 × 10^23 kg</p>
  <p>Surface Area: 74.8 million km² </p>
  <p>Gravity: 3.7 m/s²</p>
  <p>Orbital Period (Mercurian Year): 88 Earth days</p>
  <p>Day Length: 58.6 Earth days </p>
  <p>Day: Up to 430°C.
  Night: As low as -180°C</p>
  <p>Gases</p>
  <p>Oxygen (O₂): 42%</p>
  <p>Sodium (Na): 29%</p>
  <p>Hydrogen (H₂): 22%</p>
  <p>Helium (He): 6%</p>
  <p>Potassium (K): 0.5%</p>
  <p>Trace Gases: Other trace elements like argon, neon, and xenon are also present in minute amounts</p>
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

export default Mercury;
