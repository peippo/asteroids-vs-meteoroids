const BoardUnitCenter = () => {
	return (
		<mesh position={[0, 0, 0]}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color="black" />
		</mesh>
	);
};

export default BoardUnitCenter;
