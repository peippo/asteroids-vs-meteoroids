const BoardUnitPlaceMarker = ({ index, position, handleUnitClick }) => {
	return (
		<mesh
			position={position}
			onClick={(event) => {
				event.stopPropagation();
				handleUnitClick(index);
			}}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial visible={false} />
		</mesh>
	);
};

export default BoardUnitPlaceMarker;
