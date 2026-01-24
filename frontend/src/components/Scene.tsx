import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, PerspectiveCamera, Text } from "@react-three/drei";
import { Suspense } from "react";
import Barista from "./Barista";
import CoffeeCup from "./CoffeeCup";
import MenuBoard from "./MenuBoard";

interface SceneProps {
  currentResponse: string | null;
  onMenuSelect: (item: string) => void;
  isLoading: boolean;
}

export default function Scene({ currentResponse, onMenuSelect, isLoading }: SceneProps) {
  return (
    <Canvas
      style={{ width: "100%", height: "100vh" }}
      gl={{ antialias: true, alpha: true }}
      shadows
    >
      <PerspectiveCamera makeDefault position={[0, 2, 5]} fov={50} />
      
      {/* Lighting - soft, girly pastel lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={0.8} 
        color="#FFD1DC" 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight position={[-5, 3, -5]} intensity={0.4} color="#E6E6FA" />
      <pointLight position={[0, 4, 0]} intensity={0.5} color="#FFF8DC" />

      {/* Environment */}
      <Suspense fallback={null}>
        <Environment preset="sunset" />
      </Suspense>

      {/* Coffee Shop Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#FFF8DC" />
      </mesh>

      {/* Coffee Shop Walls */}
      <mesh position={[0, 2.5, -5]} receiveShadow>
        <boxGeometry args={[20, 5, 0.2]} />
        <meshStandardMaterial color="#FFD1DC" />
      </mesh>

      {/* Portfolio Coffee Sign */}
      <Text
        position={[0, 3.5, -4.9]}
        fontSize={0.4}
        color="#DDA0DD"
        anchorX="center"
        anchorY="middle"
      >
        ☕ Portfolio Coffee ✨
      </Text>

      {/* Counter Base */}
      <mesh position={[1, 0.5, -1]} receiveShadow>
        <boxGeometry args={[4, 1, 1]} />
        <meshStandardMaterial color="#E6E6FA" />
      </mesh>

      {/* Counter Top */}
      <mesh position={[1, 1.1, -1]} receiveShadow>
        <boxGeometry args={[4.2, 0.1, 1.2]} />
        <meshStandardMaterial color="#FFF8DC" />
      </mesh>

      {/* Cash Register / Till */}
      <group position={[2.5, 1.2, -0.8]}>
        <mesh>
          <boxGeometry args={[0.4, 0.3, 0.3]} />
          <meshStandardMaterial color="#FFB6C1" />
        </mesh>
        {/* Register Screen */}
        <mesh position={[0, 0.05, 0.16]}>
          <boxGeometry args={[0.3, 0.15, 0.02]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        {/* Register Buttons */}
        {[...Array(6)].map((_, i) => (
          <mesh key={i} position={[-0.15 + (i % 3) * 0.1, -0.1, 0.16]}>
            <boxGeometry args={[0.05, 0.05, 0.02]} />
            <meshStandardMaterial color="#DDA0DD" />
          </mesh>
        ))}
      </group>

      {/* Coffee Machine */}
      <group position={[0.5, 1.2, -0.8]}>
        {/* Machine Body */}
        <mesh>
          <boxGeometry args={[0.5, 0.4, 0.4]} />
          <meshStandardMaterial color="#FFD1DC" />
        </mesh>
        {/* Machine Top */}
        <mesh position={[0, 0.25, 0]}>
          <boxGeometry args={[0.5, 0.1, 0.4]} />
          <meshStandardMaterial color="#FFB6C1" />
        </mesh>
        {/* Steam Wand */}
        <mesh position={[0.2, 0.3, 0.15]}>
          <cylinderGeometry args={[0.02, 0.02, 0.2, 8]} />
          <meshStandardMaterial color="#C0C0C0" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Coffee Drip */}
        <mesh position={[0, 0.15, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.1, 16]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
      </group>

      {/* Counter Display Shelf */}
      <mesh position={[1, 1.5, -0.5]} receiveShadow>
        <boxGeometry args={[3, 0.05, 0.6]} />
        <meshStandardMaterial color="#FFF8DC" />
      </mesh>

      {/* Pastries on Display Shelf */}
      {[...Array(3)].map((_, i) => (
        <group key={i} position={[0.3 + i * 0.8, 1.55, -0.3]}>
          {/* Pastry Base */}
          <mesh>
            <cylinderGeometry args={[0.12, 0.12, 0.08, 16]} />
            <meshStandardMaterial color="#FFE5B4" />
          </mesh>
          {/* Pastry Top */}
          <mesh position={[0, 0.05, 0]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color="#FFB6C1" />
          </mesh>
        </group>
      ))}

      {/* Coffee Beans Decoration */}
      {[...Array(8)].map((_, i) => (
        <mesh
          key={i}
          position={[-1.5 + (i % 4) * 1, 1.52, -0.2 + Math.floor(i / 4) * 0.3]}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]}
        >
          <boxGeometry args={[0.04, 0.04, 0.06]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
      ))}

      {/* Decorative elements - flowers */}
      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          position={[-4 + i * 2, 0.3, -4.5]}
          rotation={[0, Math.random() * Math.PI, 0]}
        >
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#FFB6C1" />
        </mesh>
      ))}

      {/* 3D Components */}
      <Suspense fallback={null}>
        <Barista />
        <MenuBoard onSelect={onMenuSelect} />
        
        {/* Coffee Cup with response */}
        {currentResponse && (
          <CoffeeCup text={currentResponse} position={[0, 1, 0]} visible={true} />
        )}

        {/* Loading indicator */}
        {isLoading && (
          <CoffeeCup text="Brewing your answer... ☕✨" position={[0, 1, 0]} visible={true} />
        )}
      </Suspense>

      {/* Camera Controls */}
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        minDistance={3}
        maxDistance={10}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}

