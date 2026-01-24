import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface CoffeeCupProps {
  text: string;
  position?: [number, number, number];
  visible?: boolean;
}

export default function CoffeeCup({ text, position = [0, 1, 0], visible = true }: CoffeeCupProps) {
  const cupRef = useRef<THREE.Group>(null);
  const textRef = useRef<THREE.Group>(null);

  // Gentle floating animation
  useFrame((state) => {
    if (cupRef.current && visible) {
      cupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.05;
      cupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  if (!visible) return null;

  return (
    <group ref={cupRef} position={position}>
      {/* Coffee Cup */}
      <group>
        {/* Cup body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.35, 0.8, 32]} />
          <meshStandardMaterial color="#FFD1DC" metalness={0.3} roughness={0.7} />
        </mesh>
        
        {/* Cup handle */}
        <mesh position={[0.45, 0.1, 0]}>
          <torusGeometry args={[0.15, 0.03, 16, 32]} />
          <meshStandardMaterial color="#FFB6C1" />
        </mesh>

        {/* Coffee liquid inside */}
        <mesh position={[0, 0.15, 0]}>
          <cylinderGeometry args={[0.38, 0.33, 0.1, 32]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>

        {/* Coffee steam */}
        <mesh position={[0, 0.5, 0]}>
          <coneGeometry args={[0.1, 0.2, 8]} />
          <MeshDistortMaterial
            color="#FFFFFF"
            transparent
            opacity={0.3}
            distort={0.2}
            speed={2}
          />
        </mesh>
      </group>

      {/* Text on coffee - floating above cup */}
      <group ref={textRef} position={[0, 0.6, 0]}>
        <Text
          position={[0, 0, 0]}
          fontSize={0.12}
          color="#4B0082"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          textAlign="center"
        >
          {text}
        </Text>
      </group>
    </group>
  );
}

