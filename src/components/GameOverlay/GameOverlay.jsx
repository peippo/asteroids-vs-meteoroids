import { useContext } from "react";
import { StoreContext } from "../../store";
import GameEndScreen from "./GameEndScreen";
import PlayerLeftScreen from "./PlayerLeftScreen";
import Hud from "./Hud";
import QuitButton from "./QuitButton";

const GameOverlay = () => {
	const {
		winner: [winner],
		hasOpponentLeft: [hasOpponentLeft],
	} = useContext(StoreContext);

	return (
		<div>
			<Hud />
			<QuitButton />
			{winner && !hasOpponentLeft && <GameEndScreen />}
			{hasOpponentLeft && <PlayerLeftScreen />}
		</div>
	);
};

export default GameOverlay;
