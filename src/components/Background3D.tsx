import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const count = 2000;
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingOrbs() {
  const orbRefs: React.MutableRefObject<THREE.Mesh | null>[] = [
    useRef<THREE.Mesh | null>(null),
    useRef<THREE.Mesh | null>(null),
    useRef<THREE.Mesh | null>(null),
  ];
  useFrame(({ clock }) => {
    orbRefs.forEach((ref, i) => {
      if (ref.current) {
        ref.current.position.y = Math.sin(clock.getElapsedTime() + i) * 1.5 + i * 1.5;
        ref.current.position.x = Math.cos(clock.getElapsedTime() + i) * 2 + i * 1.5;
      }
    });
  });
  return (
    <>
      <Sphere ref={orbRefs[0]} args={[0.5, 32, 32]} position={[-2, 1, -2]}>
        <MeshDistortMaterial color="#b8c1ec" attach="material" distort={0.3} speed={1.5} transparent opacity={0.25} />
      </Sphere>
      <Sphere ref={orbRefs[1]} args={[0.7, 32, 32]} position={[2, -1, -3]}>
        <MeshDistortMaterial color="#a7adc6" attach="material" distort={0.4} speed={1.2} transparent opacity={0.18} />
      </Sphere>
      <Sphere ref={orbRefs[2]} args={[0.4, 32, 32]} position={[0, 2, -1]}>
        <MeshDistortMaterial color="#d6d6f5" attach="material" distort={0.3} speed={1.3} transparent opacity={0.13} />
      </Sphere>
    </>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#232946] via-[#2c5364] to-[#a8b8d8] opacity-70" />
      <div className="absolute inset-0 pointer-events-none light:bg-white light:opacity-70 dark:opacity-0 transition-opacity duration-300" />
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        <ParticleField />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
} 