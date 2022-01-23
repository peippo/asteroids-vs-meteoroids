const BoardUnitX = ({ position }) => {
	return (
		<mesh position={position}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color="salmon" />
		</mesh>
	);
};

export default BoardUnitX;
