import { useContext } from "react";
import { StoreContext } from "../../store";
import GameEndScreen from "./GameEndScreen";
import Hud from "./Hud";

const GameOverlay = () => {
	const {
		winner: [winner],
	} = useContext(StoreContext);

	return (
		<div>
			<Hud />
			{winner && <GameEndScreen />}
		</div>
	);
};

export default GameOverlay;
