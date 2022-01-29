import { useRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";

useGLTF.preload("/asteroid-red.gltf");

const BoardUnitX = ({ position }) => {
	const group = useRef();
	const { nodes, materials } = useGLTF("/asteroid-red.gltf");

	const randomizeRotation = () => {
		const rx = (Math.random() - 0.5) * 30;
		const ry = (Math.random() - 0.5) * 30;
		const rz = (Math.random() - 0.5) * 30;

		return [rx, ry, rz];
	};

	const rotation = useMemo(() => randomizeRotation(), []);

	return (
		<group
			position={position}
			rotation={rotation}
			onClick={(event) => {
				event.stopPropagation();
			}}
			ref={group}
			dispose={null}
			scale={[0.45, 0.45, 0.45]}
		>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube.geometry}
				material={materials.Material}
			/>
		</group>
	);
};

export default BoardUnitX;
