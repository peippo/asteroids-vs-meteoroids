const BoardUnitX = ({ position }) => {
	return (
		<mesh
			position={position}
			onClick={(event) => {
				event.stopPropagation();
			}}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color="salmon" />
		</mesh>
	);
};

export default BoardUnitX;
