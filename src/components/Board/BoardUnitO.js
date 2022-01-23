const BoardUnitO = ({ position }) => {
	return (
		<mesh position={position}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color="purple" />
		</mesh>
	);
};

export default BoardUnitO;
