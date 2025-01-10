// App.jsx
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, useTexture } from '@react-three/drei';

function EarthByMe() {
  const [index, setIndex] = useState(6);
  const [value, setValue] = useState(59); // Initial value set to 75
 
  // Array of Earth images
  const earthArray = ['image-8.jpg','image-7.jpg','img9.png', 'img8.png', 'img7.png', 'img6.png', 'img5.png', 'img4.png', 'img3.png', 
    'img2.png', 'img1.png', 'img0.png', 'img-2.png',  
    'img-4.png', 'img-5.png', 'img-6.png',]
   ;
  
  // Step 2: Handle the change in the slider value
  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);

    // Update the texture index based on value ranges
    if (newValue > 100) {
      setIndex(15);
    } else if (newValue >93.75) {
        setIndex(14);
    }else if (newValue >87.5) {
        setIndex(13);
    }else if (newValue >81.25) {
      setIndex(12);
    }else if (newValue >75) {
        setIndex(11);
    }else if (newValue >68.75) {
        setIndex(10);
    }else if (newValue >62.5) {
        setIndex(9);
    }else if (newValue >56.25) {
        setIndex(8);
    }else if (newValue >50) {
        setIndex(7);
    } else if (newValue > 43.75) {
      setIndex(6);
    } else if (newValue > 37.5) {
      setIndex(5);
    }else if (newValue >31.25) {
        setIndex(4);
      } 
    else if (newValue >25) {
        setIndex(3);
      }
      else if (newValue >18.75) {
        setIndex(2);
      }
      else if (newValue >12.5) {
        setIndex(1);
      }
      else if (newValue < 12.5) {
        setIndex(0);
      }
      else
       {
      setIndex(6);
    }
  };


  //Atmosphere

  const [indexofAtmosphere, setIndexAtmosphere] = useState(0);
  const [valueOfAtmo, setValueOfAtmo] = useState(10); // Initial value set to 75

  // Array of Earth images
  const atmosArray = ['atm2.png','atm3.png','atm4.png','atm5.png'];
  
  
  const handleChangeofAtmosphere =(event)=>{
    const newAtmosphere = parseInt(event.target.value);
    setValueOfAtmo(newAtmosphere);


    if(newAtmosphere > 75){
        setIndexAtmosphere(3);
    }
    else if(newAtmosphere > 50){
        setIndexAtmosphere(2);
    }else if(newAtmosphere >25){
        setIndexAtmosphere(1);
    }
    else if(newAtmosphere >8){
        setIndexAtmosphere(0);
    }
  }
  
  return (
    <>
    <div className="flex pb-16">
      <div className="h-96 w-full flex items-center justify-center border-2">
        <Canvas>
          <ambientLight intensity={1} />
          <directionalLight position={[0, 5, 5]} />
          <SphereWithTexture earthImage={earthArray[index]} />
          <OrbitControls enableZoom={true} minDistance={3} maxDistance={10}/>
        </Canvas>
        
      </div>
      <div className="p-10">
        <label htmlFor="rangeInput" className="text-white">Sun Ray Intensity</label>
        <input
          type="range"
          id="rangeInput"
          min="0"
          max="100"
          value={value}
          onChange={handleChange} // Update the state when slider is moved
        />
        <span className="px-5 text-white">{value}%</span>
        <div className="text-white">
          <p>1. Increased Frequency and Intensity of Heat Waves</p>
          <p>2. Widespread Droughts and Water Shortages</p>
          <p>3. Desertification and Habitat Loss</p>
          <p>4. Rising Sea Levels and Melting Polar Ice Caps</p>
          <p>5. Increased Wildfires and Forest Loss</p>
          <p>6. Collapse of Food Systems</p>
          <p>7.Planetary Uninhabitability</p>
          
        </div>
      </div>
      </div>
      <div className="flex pb-16 mb-20">
        <div className="h-96 w-full flex items-center justify-center border-2">
        <Canvas>
          <ambientLight intensity={1} />
          <directionalLight position={[0, 5, 5]} />
          <SphereWithTexture earthImage={atmosArray[indexofAtmosphere]} />
          <OrbitControls enableZoom={true} minDistance={3} maxDistance={10}/>
        </Canvas>
        </div>
        <div className="p-10">
        <label htmlFor="rangeInputOfAtmo" className="text-white"> Atmosphere Density:</label>
        <input
          type="range"
          id="rangeInputOfAtmo"
          min="0"
          max="100"
          value={valueOfAtmo}
          onChange={handleChangeofAtmosphere} // Update the state when slider is moved
        />
        <span className="px-5 text-white">{valueOfAtmo}%</span>

        <div className="text-white">
          <p>1. Increase in Atmospheric Pressure</p>
          <p>2. More Efficient Heat Retention (Greenhouse Effect)</p>
          <p>3. Increased Atmospheric Drag</p>
          <p>4. Altered Weather and Climate Patterns</p>
          <p>5. Changes in Oxygen and Air Composition</p>
        </div>
      </div>
      </div>
      
      
    </>
  );
}

function SphereWithTexture({ earthImage}) {
  const texture = useTexture(`/${earthImage}`); // Loading texture inside Canvas
  
  
  return (
    <Sphere args={[1, 64, 64]} scale={2}>
      <meshStandardMaterial map={texture} />
    </Sphere>
  );
}

export default EarthByMe;
