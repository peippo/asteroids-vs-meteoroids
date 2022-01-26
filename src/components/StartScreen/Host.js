import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../../services/socket";
import { StoreContext } from "../../store";

const Host = () => {
	const navigate = useNavigate();
	const socket = useContext(SocketContext);
	const {
		gameId: [gameId, setGameId],
		userId: [, setUserId],
	} = useContext(StoreContext);

	const [hasPlayerJoined, setHasPlayerJoined] = useState(false);

	const handleReadyClick = () => {
		socket.emit("startGame", gameId);
		navigate(`/game/${gameId}`);
	};

	useEffect(() => {
		socket && socket.emit("createNewGame");
	}, [socket]);

	useEffect(() => {
		if (!socket) return;

		const newGameCreatedListener = (gameInfo) => {
			setGameId(gameInfo.gameId);
			setUserId(gameInfo.userId);
		};

		const clientReadyListener = () => {
			setHasPlayerJoined(true);
		};

		socket.on("newGameCreated", newGameCreatedListener);
		socket.on("clientReady", clientReadyListener);

		return () => {
			socket.off("newGameCreated", newGameCreatedListener);
			socket.off("clientReady", clientReadyListener);
		};
	}, [socket, setGameId, setUserId]);

	return (
		<div>
			<h1>Host a game</h1>
			{!hasPlayerJoined && <p>Game ID: {gameId}</p>}

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
