import { useRef, Suspense, useState } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Preload, Html } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { planets } from "../assets/planets.js";
import Popup from '../component/Popup.jsx';
import '../App.css';

function Planet({ planet, idx, onSelect, isRevolving }) {
  const texture = useLoader(TextureLoader, `/textures/${planet.name}.jpeg`);
  const ref = useRef();
  const isSun = planet.name === "sun";

  // Normalized revolution speeds (scaled from real orbital speeds in km/s for visualization)
  const revolutionSpeeds = {
    mercury: 47.87 * 0.002,  // Scaled down for better visualization
    venus: 35.02 * 0.002,
    earth: 29.78 * 0.002,
    mars: 24.07 * 0.002,
    jupiter: 13.07 * 0.002,
    saturn: 9.69 * 0.002,
    uranus: 6.81 * 0.002,
    neptune: 5.43 * 0.002,
    sun: 0,  // The Sun doesn't revolve
  };

  // UseFrame to animate rotation and revolution of planets
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (!isSun && isRevolving) {
      // Rotate the planet on its own axis
      ref.current.rotation.y += 0.01;

      // Calculate the orbit position around the sun
      const orbitRadius = 10 * (idx + 1); // Orbit radius based on planet's index
      const angle = elapsedTime * (revolutionSpeeds[planet.name.toLowerCase()] || 0.01); // Use the planet's speed

      // Update the position to simulate circular orbit
      ref.current.position.x = orbitRadius * Math.cos(angle);
      ref.current.position.z = orbitRadius * Math.sin(angle);
    }
  });

  return (
    <>
      <mesh
        scale={planet.scale}
        ref={ref}
        onClick={() => onSelect(planet)} // Trigger onSelect when clicked
      >
        <sphereGeometry attach="geometry" args={[0.5, 32, 32]} />
        {isSun ? (
          <meshBasicMaterial map={texture} attach="material" />
        ) : (
          <meshStandardMaterial attach="material" map={texture} />
        )}
        {/* Display the planet name as HTML */}
        <Html className="planet-name text-white">{planet.name}</Html>
      </mesh>
    </>
  );
}

function Solar() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [isRevolving, setIsRevolving] = useState(true); // State to control revolution
  const [showPopup, setShowPopup] = useState(true); // State to control popup visibility
  const [routingpage, setRoutingpage] = useState(false); // State to handle routing

  const handleSelect = (planet) => {
    setSelectedPlanet(planet);
    setRoutingpage(true);
    alert(`You selected ${planet.name}`); // Display selected planet's name
  };

  const toggleRevolution = () => {
    setIsRevolving((prev) => !prev); // Toggle revolution on/off
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <>
      <div className="flex justify-center mt-4">
        <button
          onClick={toggleRevolution}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow hover:bg-blue-600 transition duration-200"
        >
          {isRevolving ? "Stop Revolution" : "Start Revolution"}
        </button>
      </div>

      <Canvas
        style={{ position: "absolute" }}
        camera={{ position: [20, 0, -20] }}
      >
        <pointLight color="#F4E99B" />
        <Suspense fallback={null}>
          <OrbitControls enableZoom={true} minDistance={5} maxDistance={50} />
          <Stars />
          <ambientLight intensity={1} />

          {planets?.map((planet, idx) => (
            <Planet
              planet={planet}
              key={idx}
              idx={idx}
              onSelect={handleSelect}
              isRevolving={isRevolving}
            />
          ))}
        </Suspense>
        <Preload all />
      </Canvas>

      {showPopup && (
        <Popup
          message={`You can learn about each planet by clicking on it!`}
          onClose={handleClosePopup}
        />
      )}
    </>
  );
}

export default Solar;
