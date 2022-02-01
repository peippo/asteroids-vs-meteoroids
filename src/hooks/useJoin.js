import { useContext, useState, useEffect } from "react";
import { SocketContext } from "../services/socket";
import { StoreContext } from "../store";
import {
	GAME_NOT_FOUND,
	HOST_READY,
	JOIN_GAME,
	JOINED_GAME,
} from "../constants";

const useJoin = () => {
	const socket = useContext(SocketContext);
	const {
		currentGameId: [currentGameId, setCurrentGameId],
		myId: [myId, setMyId],
		isHost: [, setIsHost],
		opponentId: [, setOpponentId],
	} = useContext(StoreContext);

	const [hasJoinedGame, setHasJoinedGame] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [hostReady, setHostReady] = useState(false);

	const joinGame = (id) => {
		socket.emit(JOIN_GAME, id.toString());
	};

	useEffect(() => {
		if (!socket) return;

		const hostReadyListener = () => {
			setHostReady(true);
		};

		const gameNotFoundListener = () => {
			setHasError(true);
		};

		const joinedGameListener = ({ gameId, userId, hostId }) => {
			setCurrentGameId(gameId);
			setMyId(userId);
			setOpponentId(hostId);
			setIsHost(false);
			setHasJoinedGame(true);
		};

		socket.on(JOINED_GAME, joinedGameListener);
		socket.on(HOST_READY, hostReadyListener);
		socket.on(GAME_NOT_FOUND, gameNotFoundListener);

		return () => {
			socket.off(JOINED_GAME, joinedGameListener);
			socket.off(HOST_READY, hostReadyListener);
			socket.off(GAME_NOT_FOUND, gameNotFoundListener);
		};
	}, [socket, setCurrentGameId, setMyId, myId, setOpponentId, setIsHost]);

	return [
		currentGameId,
		joinGame,
		hasJoinedGame,
		hostReady,
		hasError,
		setHasError,
	];
};

export default useJoin;
