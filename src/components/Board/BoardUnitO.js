import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

useGLTF.preload("/asteroid-blue.gltf");

const BoardUnitX = ({ position }) => {
	const group = useRef();
	const mesh = useRef();
	const { nodes, materials } = useGLTF("/asteroid-blue.gltf");

	const randomizeRotation = () => {
		const rx = (Math.random() - 0.5) * 30;
		const ry = (Math.random() - 0.5) * 30;
		const rz = (Math.random() - 0.5) * 30;

		return [rx, ry, rz];
	};

	const rotation = useMemo(() => randomizeRotation(), []);

	useFrame(
		() =>
			(mesh.current.rotation.x =
				mesh.current.rotation.y =
				mesh.current.rotation.z +=
					0.002)
	);

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
				ref={mesh}
				castShadow
				receiveShadow
				geometry={nodes.Cube.geometry}
				material={materials.Material}
			/>
		</group>
	);
};

export default BoardUnitX;
