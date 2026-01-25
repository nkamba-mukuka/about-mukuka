import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Image } from "@react-three/drei";
import * as THREE from "three";

interface BaristaProps {
  isBrewing?: boolean;
}

export default function Barista({ isBrewing }: BaristaProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Gentle idle animation (breathing effect)
  useFrame((state) => {
    if (groupRef.current) {
      // Bobbing up and down slightly
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1) * 0.05;
      // Slight rotation for "hand-held photo" feel
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Polaroid Frame Group */}
      <group position={[0, 0, 0]}>
        {/* White Border */}
        <mesh position={[0, 1.8, -0.01]}>
          <planeGeometry args={[3.2, 4]} />
          <meshBasicMaterial color="#FFFFFF" />
        </mesh>

        {/* Photo Content */}
        {/* Using the solid white barista image */}
        <Image
          url="/barista.png"
          transparent={false} // It has solid background now
          scale={[3, 3]}
          position={[0, 2.0, 0]}
          toneMapped={false}
        />
      </group>

      {/* Chat Bubble - "Order coming up!" */}
      {isBrewing && (
        <group position={[1.4, 3.2, 0.1]}> {/* Closer to head */}
          <mesh position={[0, 0, -0.01]}>
            <planeGeometry args={[1.5, 0.5]} />
            <meshBasicMaterial color="#FFFFFF" transparent opacity={0.95} />
          </mesh>
          <Text
            fontSize={0.15}
            color="#FFB6C1" // Pink text
            anchorX="center"
            anchorY="middle"
          >
            Order coming up! 💖
          </Text>
        </group>
      )}

      {/* Name tag written on the polaroid bottom */}
      <Text
        position={[0, 0.2, 0.1]}
        fontSize={0.2}
        color="#6F4E37" // handwriting style color
        anchorX="center"
        anchorY="middle"
      >
        Barista AI ☕
      </Text>
    </group>
  );
}
