import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Pupper = ({isMobile}) => {
  const doggo = useGLTF(process.env.PUBLIC_URL + '/pupper-transformed.glb');

  return (
    <mesh>
      <hemisphereLight 
        intensity={0.15}
        groundColor="black"
      />
      <pointLight intensity={1} />
      <spotLight 
        position={[1, 1, 1]}
        angle={0.4}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={doggo.scene}
        scale={isMobile ? 1.5 : 2}
        position={isMobile ? [0, 0.6, 0.5] : [0, 0.6, 2.5]}
        rotation={[0, 1, 0]}
      />
    </mesh>
  )
}

const PupperCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, []);
  return(
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [12, 10, 10], fov: 10 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Pupper isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default PupperCanvas;