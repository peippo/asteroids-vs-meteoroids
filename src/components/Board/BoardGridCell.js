import * as THREE from "three";

const BoardGridCell = ({ position }) => {
	const geometry = new THREE.BoxGeometry(1, 1, 1);

	return (
		<lineSegments position={position}>
			<edgesGeometry attach="geometry" args={[geometry]} />
			<lineBasicMaterial attach="material" color={"#5a5a5a"} />
		</lineSegments>
	);
};

export default BoardGridCell;
