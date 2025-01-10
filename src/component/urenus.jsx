import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, useTexture } from '@react-three/drei';

function TexturedSphere() {
  // Load texture using useTexture hook
  const texture = useTexture('./public/urenus.jpg'); // Replace with your texture path

  return (
    <Sphere args={[1, 64, 64]} scale={2}> {/* args are [radius, widthSegments, heightSegments] */}
      <meshStandardMaterial map={texture} />
    </Sphere>
  );
}

function Urenus() {
  return <>
  <div className="flex">
    <div className="flex-1 text-white p-4">
    <p>Diameter: 50,724 km</p>
    <p>Mass: 8.681 × 10^25 kg </p>
    <p>Surface Area: 8.083 billion km²</p>
    <p>Gravity: 8.69 m/s²</p>
    <p>Orbital Period (Uranian Year): 84 Earth years.</p>
    <p>Day Length: 17 hours, 14 minutes.</p>
    <p>Surface Temperature: -224°C</p>
    <p>Distance from the Sun: 2.87 billion km</p>
    <p>Gases</p>
    <p>Hydrogen (H₂): 82.5%</p>
    <p>Helium (He): 15.2%</p>
    <p>Methane (CH₄): 2.3%</p>
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

export default Urenus;
