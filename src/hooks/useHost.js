import { useContext, useState, useEffect } from "react";
import { SocketContext } from "../services/socket";
import { StoreContext } from "../store";
import { useLocation } from "wouter";
import {
	CLIENT_READY,
	CREATE_NEW_GAME,
	NEW_GAME_CREATED,
	START_GAME,
} from "../constants";

const useHost = () => {
	const [, setLocation] = useLocation();
	const socket = useContext(SocketContext);
	const {
		currentGameId: [currentGameId, setCurrentGameId],
		myId: [myId, setMyId],
		opponentId: [, setOpponentId],
		isHost: [, setIsHost],
	} = useContext(StoreContext);

	const [hasPlayerJoined, setHasPlayerJoined] = useState(false);

	const handleReadyClick = () => {
		socket.emit(START_GAME, currentGameId);
		setLocation(`/game/${currentGameId}`);
	};

	useEffect(() => {
		socket.emit(CREATE_NEW_GAME);
	}, [socket]);

	useEffect(() => {
		if (!socket) return;

		const newGameCreatedListener = ({ gameId, userId }) => {
			setCurrentGameId(gameId);
			setMyId(userId);
			setIsHost(true);
		};

		const clientReadyListener = ({ clientId }) => {
			setHasPlayerJoined(true);
			setOpponentId(clientId);
		};

		socket.on(NEW_GAME_CREATED, newGameCreatedListener);
		socket.on(CLIENT_READY, clientReadyListener);

		return () => {
			socket.off(NEW_GAME_CREATED, newGameCreatedListener);
			socket.off(CLIENT_READY, clientReadyListener);
		};
	}, [socket, setCurrentGameId, setMyId, myId, setOpponentId, setIsHost]);

	return [currentGameId, hasPlayerJoined, handleReadyClick];
};

export default useHost;
