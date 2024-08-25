import { Canvas } from '@react-three/fiber';
import "./App.css";
import { OrbitControls } from '@react-three/drei';
import Cyl from './Cyl';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import Icon from './Icon';


const App = () => {
  return (
    <>
    
    <Icon></Icon>

      <Canvas flat camera={{ fov: 26 }}>
        <OrbitControls />
        <ambientLight />
        <Cyl />
        <EffectComposer>
          <Bloom mipmapBlur intensity={8} luminanceThreshold={0} luminanceSmoothing={0} />
        </EffectComposer>
      </Canvas>

    </>
  );
};

export default App;
