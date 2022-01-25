import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../../services/socket";

const Host = () => {
	const socket = useContext(SocketContext);
	const navigate = useNavigate();

	const [gameId, setGameId] = useState();
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

		const newGameCreatedListener = (gameId) => {
			setGameId(gameId);
		};

		const joinedGameListener = () => {
			setHasPlayerJoined(true);
		};

		socket.on("newGameCreated", newGameCreatedListener);
		socket.on("joinedGame", joinedGameListener);

		return () => {
			socket.off("newGameCreated", newGameCreatedListener);
			socket.off("joinedGame", joinedGameListener);
		};
	}, [socket]);

	return (
		<div>
			<h2>Host a game</h2>
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
