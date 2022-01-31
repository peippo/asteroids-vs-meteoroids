import { useContext } from "react";
import { SocketContext } from "../services/socket";
import { StoreContext } from "../store";
import { START_GAME } from "../constants";

const useGameEnd = () => {
	const socket = useContext(SocketContext);
	const {
		currentGameId: [currentGameId],
		myId: [myId],
		winner: [winner],
		isHost: [isHost],
	} = useContext(StoreContext);

	const isWinner = myId === winner;

	const handleRestartClick = () => {
		socket.emit(START_GAME, currentGameId);
	};

	return [isWinner, isHost, handleRestartClick];
};

export default useGameEnd;
