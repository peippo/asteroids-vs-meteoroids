import { useState } from "react";

const BoardUnit = ({ position }) => {
	const [isSelected, setIsSelected] = useState(false);

	return (
		<mesh
			position={position}
			onClick={(event) => {
				event.stopPropagation();
				setIsSelected(!isSelected);
			}}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial visible={isSelected} color={"salmon"} />
		</mesh>
	);
};

export default BoardUnit;
