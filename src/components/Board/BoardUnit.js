import BoardUnitPlaceMarker from "./BoardUnitPlaceMarker";
import BoardUnitCenter from "./BoardUnitCenter";
import BoardUnitX from "./BoardUnitX";
import BoardUnitO from "./BoardUnitO";

const BoardUnit = ({ index, type, position, handleUnitClick }) => {
	switch (type) {
		case "X":
			return <BoardUnitX position={position} />;
		case "O":
			return <BoardUnitO position={position} />;
		case "center":
			return <BoardUnitCenter />;
		default:
			return (
				<BoardUnitPlaceMarker
					index={index}
					position={position}
					handleUnitClick={handleUnitClick}
				/>
			);
	}
};

export default BoardUnit;
