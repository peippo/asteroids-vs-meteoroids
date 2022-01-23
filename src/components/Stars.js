import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Stars = ({ count }) => {
	const mesh = useRef();
	const placeholder = useMemo(() => new THREE.Object3D(), []);

	const particles = useMemo(() => {
		const particleSpecs = [];

		for (let i = 0; i < count; i++) {
			particleSpecs.push({
				t: Math.random() * 50,
				speed: 0.01 + Math.random() / 100,
				xFactor: -50 + Math.random() * 100,
				yFactor: -50 + Math.random() * 100,
				zFactor: -50 + Math.random() * 100,
			});
		}

		return particleSpecs;
	}, [count]);

	useFrame(() => {
		particles.forEach((particle, i) => {
			let { t, speed, xFactor, yFactor, zFactor } = particle;

			t = particle.t += speed;
			const s = Math.sin(t);

			placeholder.position.set(xFactor, yFactor, zFactor);
			placeholder.scale.set(s, s, s);
			placeholder.rotation.set(s * 2, s * 2, s * 2);
			placeholder.updateMatrix();

			mesh.current.setMatrixAt(i, placeholder.matrix);
		});

		mesh.current.instanceMatrix.needsUpdate = true;
	});

	return (
		<instancedMesh ref={mesh} args={[null, null, count]}>
			<icosahedronGeometry args={[0.15, 0]} />
			<meshPhongMaterial color="#493864" />
		</instancedMesh>
	);
};

export default Stars;
