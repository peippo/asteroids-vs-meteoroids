import { useContext } from "react";
import { StoreContext } from "../../store";
import BoardUnitPlaceMarker from "./BoardUnitPlaceMarker";
import BoardUnitCenter from "./BoardUnitCenter";
import BoardUnitX from "./BoardUnitX";
import BoardUnitO from "./BoardUnitO";

const BoardUnit = ({ index, type, position, handleUnitClick }) => {
	const {
		myId: [myId],
		opponentId: [opponentId],
	} = useContext(StoreContext);

	if (myId && type === myId) {
		return <BoardUnitX position={position} />;
	}

	if (opponentId && type === opponentId) {
		return <BoardUnitO position={position} />;
	}

	if (type === "center") {
		return <BoardUnitCenter />;
	}

	return (
		<BoardUnitPlaceMarker
			index={index}
			position={position}
			handleUnitClick={handleUnitClick}
		/>
	);
};

export default BoardUnit;
