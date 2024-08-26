import { Canvas } from '@react-three/fiber';
import "./App.css";
import { OrbitControls } from '@react-three/drei';
import Cyl from './Cyl';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import Icon from './Icon';
import { useState, useEffect } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Icon />
      {isLoading ? (
        <div className="loading-screen flex justify-center items-center h-screen">
          <progress className="progress progress-info w-56"></progress>
        </div>
      ) : (
        <>

          <Canvas flat camera={{ fov: 26 }}>
            <OrbitControls />
            <ambientLight />
            <Cyl />
            <EffectComposer>
              <Bloom mipmapBlur intensity={8} luminanceThreshold={0} luminanceSmoothing={0} />
            </EffectComposer>
          </Canvas>
        </>
      )}
    </>
  );
};

export default App;
