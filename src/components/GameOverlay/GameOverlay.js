import { useContext } from "react";
import { StoreContext } from "../../store";
import useResetSession from "../../hooks/useResetSession";
import GameEndScreen from "./GameEndScreen";
import PlayerLeftScreen from "./PlayerLeftScreen";
import Hud from "./Hud";
import QuitButton from "./QuitButton";

const GameOverlay = () => {
	// Reset session on component unmount
	useResetSession();

	const {
		winner: [winner],
		opponentLeft: [opponentLeft],
	} = useContext(StoreContext);

	return (
		<div>
			<Hud />
			<QuitButton />
			{winner && !opponentLeft && <GameEndScreen />}
			{opponentLeft && <PlayerLeftScreen />}
		</div>
	);
};

export default GameOverlay;
