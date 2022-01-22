import { RoundedBox } from "@react-three/drei";

const BoardCell = ({ position }) => {
	return (
		<RoundedBox
			args={[1, 1, 1]}
			radius={0.05}
			smoothness={4}
			position={position}
		>
			<meshStandardMaterial wireframe={true} color={"salmon"} />
		</RoundedBox>
	);
};

export default BoardCell;
