import { useRef, useState, useEffect } from "react";
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
  const [displayedText, setDisplayedText] = useState("");

  // Typewriter effect
  useEffect(() => {
    if (visible) {
      setDisplayedText("");
      let currentLength = 0;
      const interval = setInterval(() => {
        currentLength++;
        setDisplayedText(text.slice(0, currentLength));
        if (currentLength >= text.length) clearInterval(interval);
      }, 50); // Speed of typing
      return () => clearInterval(interval);
    }
  }, [text, visible]);

  // Gentle floating animation with wobble on entry
  useFrame((state) => {
    if (cupRef.current && visible) {
      const time = state.clock.elapsedTime;
      // Float
      cupRef.current.position.y = position[1] + Math.sin(time) * 0.05;
      // Rotate
      cupRef.current.rotation.y = Math.sin(time * 0.5) * 0.1;

      // Slight wobbles (simulating liquid movement feeling)
      cupRef.current.rotation.z = Math.sin(time * 2) * 0.02;
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
          <meshStandardMaterial color="#FFD1DC" /> {/* Pink Pastel - matches background */}
        </mesh>

        {/* Cup handle */}
        <mesh position={[0.45, 0.1, 0]}>
          <torusGeometry args={[0.15, 0.03, 16, 32]} />
          <meshStandardMaterial color="#FFD1DC" />
        </mesh>

        {/* Coffee liquid inside */}
        <mesh position={[0, 0.15, 0]}>
          <cylinderGeometry args={[0.38, 0.33, 0.1, 32]} />
          <meshStandardMaterial color="#6F4E37" /> {/* Dark Coffee */}
        </mesh>

        {/* Coffee steam */}
        <mesh position={[0, 0.5, 0]}>
          <coneGeometry args={[0.1, 0.2, 8]} />
          <MeshDistortMaterial
            color="#FFFFFF"
            transparent
            opacity={0.2}
            distort={0.4}
            speed={2}
          />
        </mesh>
      </group>

      {/* Text on coffee - Latte Art Style */}
      <group position={[0, 0.22, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <Text
          position={[0, 0, 0]}
          fontSize={0.055} // Even smaller for better fit
          color="#8B008B"
          anchorX="center"
          anchorY="middle"
          maxWidth={0.5} // Strict fit inside cup
          textAlign="center"
          lineHeight={1.3}
        >
          {displayedText}
        </Text>
      </group>
    </group>
  );
}

