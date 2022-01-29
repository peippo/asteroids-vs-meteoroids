import { useContext } from "react";
import { StoreContext } from "../../store";
import GameEndScreen from "./GameEndScreen";
import PlayerLeftScreen from "./PlayerLeftScreen";
import Hud from "./Hud";

const GameOverlay = () => {
	const {
		winner: [winner],
		opponentLeft: [opponentLeft],
	} = useContext(StoreContext);

	return (
		<div>
			<Hud />
			{winner && !opponentLeft && <GameEndScreen />}
			{opponentLeft && <PlayerLeftScreen />}
		</div>
	);
};

export default GameOverlay;
