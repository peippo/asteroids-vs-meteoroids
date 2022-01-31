import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { useLocation } from "wouter";
import { SocketContext } from "../../services/socket";
import { StoreContext } from "../../store";
import Modal from "../Modal";
import {
	CLIENT_READY,
	CREATE_NEW_GAME,
	NEW_GAME_CREATED,
	START_GAME,
} from "../../constants";
import BackButton from "./BackButton";

const Host = () => {
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

	return (
		<Modal>
			<h1 className="styled-heading">Host a game</h1>
			{!hasPlayerJoined && (
				<>
					<Text>
						Ask a friend to join you with <strong>Game ID:</strong>
					</Text>
					<GameId>{currentGameId}</GameId>
				</>
			)}

			{hasPlayerJoined && (
				<>
					<Text>
						<strong>Someone joined!</strong> Ready?
					</Text>
					<Button onClick={handleReadyClick}>Start the game</Button>
				</>
			)}

			<BackButton />
		</Modal>
	);
};

const Text = styled.p`
	margin-bottom: 0;
`;

const GameId = styled.span`
	display: block;
	font-size: 2.5rem;
	color: var(--color-light-green);
`;

const Button = styled.button`
	margin-top: 2rem;
`;

export default Host;
