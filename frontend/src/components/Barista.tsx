import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

export default function Barista() {
  const baristaRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Group>(null);

  // Gentle idle animation - slight nodding and breathing
  useFrame((state) => {
    if (baristaRef.current) {
      baristaRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      baristaRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.03;
    }
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    if (bodyRef.current) {
      bodyRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.02;
    }
  });

  return (
    <group ref={baristaRef} position={[2, 0, -0.8]} castShadow>
      {/* Female Barista */}
      <group ref={bodyRef}>
        {/* Head */}
        <group ref={headRef} position={[0, 1.65, 0]}>
          {/* Face */}
          <mesh>
            <sphereGeometry args={[0.25, 32, 32]} />
            <meshStandardMaterial color="#FFDBAC" />
          </mesh>
          
          {/* Hair - Long, styled */}
          <mesh position={[0, 0.15, -0.1]}>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
          {/* Hair Side */}
          <mesh position={[-0.2, 0.1, 0]}>
            <sphereGeometry args={[0.15, 32, 32]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
          <mesh position={[0.2, 0.1, 0]}>
            <sphereGeometry args={[0.15, 32, 32]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
          {/* Hair Ponytail */}
          <mesh position={[0, 0.05, -0.25]}>
            <sphereGeometry args={[0.12, 32, 32]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>

          {/* Eyes */}
          <mesh position={[-0.08, 0.05, 0.22]}>
            <sphereGeometry args={[0.03, 16, 16]} />
            <meshStandardMaterial color="#000000" />
          </mesh>
          <mesh position={[0.08, 0.05, 0.22]}>
            <sphereGeometry args={[0.03, 16, 16]} />
            <meshStandardMaterial color="#000000" />
          </mesh>

          {/* Smile */}
          <mesh position={[0, -0.05, 0.22]} rotation={[0, 0, Math.PI]}>
            <torusGeometry args={[0.06, 0.01, 8, 16, Math.PI]} />
            <meshStandardMaterial color="#000000" />
          </mesh>
        </group>

        {/* Neck */}
        <mesh position={[0, 1.4, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.15, 16]} />
          <meshStandardMaterial color="#FFDBAC" />
        </mesh>

        {/* Body - More feminine shape */}
        <mesh position={[0, 1, 0]}>
          <boxGeometry args={[0.5, 0.9, 0.35]} />
          <meshStandardMaterial color="#FFB6C1" />
        </mesh>

        {/* Chest/Breast area - subtle feminine shape */}
        <mesh position={[0, 1.15, 0.18]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#FFB6C1" />
        </mesh>

        {/* Waist */}
        <mesh position={[0, 0.7, 0]}>
          <boxGeometry args={[0.45, 0.3, 0.3]} />
          <meshStandardMaterial color="#FFB6C1" />
        </mesh>

        {/* Apron */}
        <mesh position={[0, 0.85, 0.18]}>
          <boxGeometry args={[0.55, 0.7, 0.05]} />
          <meshStandardMaterial color="#FFF8DC" />
        </mesh>
        {/* Apron Ties */}
        <mesh position={[-0.2, 0.5, 0.2]}>
          <boxGeometry args={[0.05, 0.3, 0.05]} />
          <meshStandardMaterial color="#FFD1DC" />
        </mesh>
        <mesh position={[0.2, 0.5, 0.2]}>
          <boxGeometry args={[0.05, 0.3, 0.05]} />
          <meshStandardMaterial color="#FFD1DC" />
        </mesh>

        {/* Left Arm */}
        <mesh position={[-0.35, 1, 0]}>
          <boxGeometry args={[0.15, 0.7, 0.15]} />
          <meshStandardMaterial color="#FFDBAC" />
        </mesh>
        {/* Left Hand */}
        <mesh position={[-0.35, 0.55, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#FFDBAC" />
        </mesh>

        {/* Right Arm - holding coffee cup */}
        <mesh position={[0.35, 1, 0]}>
          <boxGeometry args={[0.15, 0.7, 0.15]} />
          <meshStandardMaterial color="#FFDBAC" />
        </mesh>
        {/* Right Hand */}
        <mesh position={[0.35, 0.55, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#FFDBAC" />
        </mesh>
        {/* Coffee cup in hand */}
        <mesh position={[0.45, 0.5, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.15, 16]} />
          <meshStandardMaterial color="#FFD1DC" />
        </mesh>
        {/* Coffee in cup */}
        <mesh position={[0.45, 0.5, 0]}>
          <cylinderGeometry args={[0.07, 0.07, 0.12, 16]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>

        {/* Legs */}
        <mesh position={[-0.15, 0.2, 0]}>
          <boxGeometry args={[0.2, 0.6, 0.2]} />
          <meshStandardMaterial color="#E6E6FA" />
        </mesh>
        <mesh position={[0.15, 0.2, 0]}>
          <boxGeometry args={[0.2, 0.6, 0.2]} />
          <meshStandardMaterial color="#E6E6FA" />
        </mesh>

        {/* Shoes */}
        <mesh position={[-0.15, -0.1, 0.1]}>
          <boxGeometry args={[0.2, 0.1, 0.3]} />
          <meshStandardMaterial color="#DDA0DD" />
        </mesh>
        <mesh position={[0.15, -0.1, 0.1]}>
          <boxGeometry args={[0.2, 0.1, 0.3]} />
          <meshStandardMaterial color="#DDA0DD" />
        </mesh>
      </group>

      {/* Name tag */}
      <Text
        position={[0, 2.3, 0]}
        fontSize={0.12}
        color="#DDA0DD"
        anchorX="center"
        anchorY="middle"
      >
        Barista AI ☕✨
      </Text>
    </group>
  );
}
