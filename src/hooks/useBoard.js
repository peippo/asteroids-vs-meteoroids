import { useContext, useState, useEffect } from "react";
import { SocketContext } from "../services/socket";
import { StoreContext } from "../store";
import { useLocation } from "wouter";
import { initialCells } from "../utils";
import {
	OPPONENT_LEFT,
	RESET_GAME,
	SUBMIT_TURN,
	TURN_INFO,
	WINNER_FOUND,
} from "../constants";

const useBoard = () => {
	const [, setLocation] = useLocation();
	const socket = useContext(SocketContext);
	const {
		myId: [myId],
		isMyTurn: [isMyTurn, setIsMyTurn],
		currentGameId: [currentGameId],
		winner: [winner, setWinner],
		opponentLeft: [, setOpponentLeft],
	} = useContext(StoreContext);

	const [cells, setCells] = useState(initialCells);

	const handleUnitClick = (index) => {
		if (!isMyTurn || winner) return;

		const newCells = [...cells];
		newCells[index] = myId;
		setCells(newCells);

		socket.emit(SUBMIT_TURN, {
			gameId: currentGameId,
			userId: myId,
			cells: newCells,
		});
	};

	useEffect(() => {
		if (!currentGameId) {
			setLocation(`/`);
		}
	}, [currentGameId, setLocation]);

	useEffect(() => {
		if (!socket) return;

		const turnInfoListener = (data) => {
			setCells(data.cells);
			setIsMyTurn(myId === data.nextTurnId);
		};

		const winnerListener = ({ winnerId }) => {
			setWinner(winnerId);
		};

		const resetGameListener = () => {
			setOpponentLeft(null);
			setWinner(null);
			setCells(initialCells);
		};

		const opponentLeftListener = () => {
			setOpponentLeft(true);
		};

		socket.on(TURN_INFO, turnInfoListener);
		socket.on(WINNER_FOUND, winnerListener);
		socket.on(RESET_GAME, resetGameListener);
		socket.on(OPPONENT_LEFT, opponentLeftListener);

		return () => {
			socket.off(TURN_INFO, turnInfoListener);
			socket.off(WINNER_FOUND, winnerListener);
			socket.off(RESET_GAME, resetGameListener);
			socket.off(OPPONENT_LEFT, opponentLeftListener);
		};
	}, [socket, myId, setIsMyTurn, setWinner, setOpponentLeft]);

	return [cells, handleUnitClick];
};

export default useBoard;
