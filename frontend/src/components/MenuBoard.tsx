import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

interface MenuBoardProps {
  onSelect: (item: string) => void;
}

const menuItems = [
  { id: "about", label: "About Me Americano", emoji: "☕" },
  { id: "skills", label: "Skills Sprinkles", emoji: "✨" },
  { id: "projects", label: "Projects Pastry", emoji: "🥐" },
  { id: "experience", label: "Exp. Espresso", emoji: "💼" },
  { id: "education", label: "Edu. Eclair", emoji: "🎓" },
  { id: "contact", label: "Contact Matcha", emoji: "🍵" },
];

export default function MenuBoard({ onSelect }: MenuBoardProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <group position={[-3, 2, -2]} rotation={[0, Math.PI / 4, 0]}>
      {/* Menu Board Background */}
      <mesh>
        <boxGeometry args={[2, 3, 0.1]} />
        <meshStandardMaterial color="#FFF8DC" />
      </mesh>

      {/* Menu Title */}
      <Text
        position={[0, 1.2, 0.1]}
        fontSize={0.2}
        color="#DDA0DD" // Lavender Dark
        anchorX="center"
        anchorY="middle"
      >
        Menu ☕
      </Text>

      {/* Menu Items */}
      {menuItems.map((item, index) => (
        <MenuItem
          key={item.id}
          item={item}
          index={index}
          onSelect={onSelect}
        />
      ))}
    </group>
  );
}

function MenuItem({ item, index, onSelect }: { item: any, index: number, onSelect: (id: string) => void }) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Smooth lerp for scale (spring-like feel)
      const targetScale = hovered ? 1.1 : 1;
      meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, delta * 10);
      meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, targetScale, delta * 10);
      meshRef.current.scale.z = THREE.MathUtils.lerp(meshRef.current.scale.z, targetScale, delta * 10);

      // Smooth lerp for position (pop out effect)
      const targetZ = hovered ? 0.15 : 0.1;
      meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, targetZ, delta * 10);
    }
  });

  return (
    <group
      ref={meshRef}
      position={[0, 0.8 - index * 0.35, 0.1]}
      onPointerOver={() => { document.body.style.cursor = 'pointer'; setHovered(true); }}
      onPointerOut={() => { document.body.style.cursor = 'auto'; setHovered(false); }}
      onClick={() => onSelect(item.id)}
    >
      <mesh>
        <boxGeometry args={[1.5, 0.25, 0.05]} />
        <meshStandardMaterial
          color={hovered ? "#FFB6C1" : "#FFD1DC"} // Pink Soft / Pink Pastel
          emissive={hovered ? "#FFB6C1" : "#000000"}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      </mesh>
      <Text
        position={[0, 0, 0.06]}
        fontSize={0.1}
        color={hovered ? "#8B008B" : "#DDA0DD"} // Dark Magenta / Lavender Dark
        anchorX="center"
        anchorY="middle"
      >
        {item.emoji} {item.label}
      </Text>
    </group>
  );
}

