import { useContext, useState, useEffect } from "react";
import { useLocation } from "wouter";
import { SocketContext } from "../../services/socket";
import { StoreContext } from "../../store";

const Host = () => {
	const [, setLocation] = useLocation();
	const socket = useContext(SocketContext);
	const {
		currentGameId: [currentGameId, setCurrentGameId],
		myId: [myId, setMyId],
		opponentId: [, setOpponentId],
	} = useContext(StoreContext);

	const [hasPlayerJoined, setHasPlayerJoined] = useState(false);

	const handleReadyClick = () => {
		socket.emit("startGame", currentGameId);
		setLocation(`/game/${currentGameId}`);
	};

	useEffect(() => {
		socket.emit("createNewGame");
	}, [socket]);

	useEffect(() => {
		if (!socket) return;

		const newGameCreatedListener = ({ gameId, userId }) => {
			setCurrentGameId(gameId);
			setMyId(userId);
		};

		const clientReadyListener = ({ clientId }) => {
			setHasPlayerJoined(true);
			setOpponentId(clientId);
		};

		socket.on("newGameCreated", newGameCreatedListener);
		socket.on("clientReady", clientReadyListener);

		return () => {
			socket.off("newGameCreated", newGameCreatedListener);
			socket.off("clientReady", clientReadyListener);
		};
	}, [socket, setCurrentGameId, setMyId, myId, setOpponentId]);

	return (
		<div>
			<h1>Host a game</h1>
			{!hasPlayerJoined && <p>Game ID: {currentGameId}</p>}

			{hasPlayerJoined && (
				<>
					<p>Someone joined!</p>
					<p>Ready?</p>
					<button onClick={handleReadyClick}>Let's go</button>
				</>
			)}
		</div>
	);
};

export default Host;
