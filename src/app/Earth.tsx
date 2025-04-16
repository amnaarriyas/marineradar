import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Earth = () => {
  const earthRef = useRef<any>();
  const [colorMap, normalMap, specularMap] = useLoader(TextureLoader, [
    "/earthmap1k.jpg",       // surface texture
    "/earth_normal_map.jpg", // normal texture
    "/earthspec1k.jpg",      // specular texture
  ]);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={earthRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        metalness={0.4}
        roughness={0.7}
        specularMap={specularMap}
      />
    </mesh>
  );
};

export default Earth;
