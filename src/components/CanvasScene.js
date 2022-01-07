import { useMemo, useRef } from "react";
import * as THREE from "three";
import vertexShader from "../shaders/vertexShader";
import fragmentShader from "../shaders/fragmentShader";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const CanvasScene = () => {
  return (
    <>
      <OrbitControls />
      <Plane />
    </>
  );
};

export default CanvasScene;

const Plane = () => {
  const meshRef = useRef();
  const uniforms = useMemo(
    () => ({
      uResolution: {
        value: new THREE.Vector2(window.screen.width, window.screen.height),
      },
      uTime: { value: 0 },
    }),
    []
  );

  useFrame(({ clock }) => {
    meshRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
      />
    </mesh>
  );
};
