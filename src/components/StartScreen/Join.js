import { useContext, useState, useEffect } from "react";
import { SocketContext } from "../../services/socket";
import { useNavigate } from "react-router-dom";

const Join = () => {
	const socket = useContext(SocketContext);
	const [gameId, setGameId] = useState("");
	const [hasJoinedGame, setHasJoinedGame] = useState(false);
	const [hostReady, setHostReady] = useState(false);
	const navigate = useNavigate();

	const handleChange = (event) => {
		setGameId(event.target.value);
	};

	const handleJoinClick = () => {
		socket.emit("joinGame", gameId);
		setHasJoinedGame(true);
	};

	useEffect(() => {
		if (!socket) return;

		const hostReadyListener = () => {
			console.log("host ready listener");
			setHostReady(true);
		};

		socket.on("hostReady", hostReadyListener);

		return () => {
			socket.off("hostReady", hostReadyListener);
		};
	}, [socket]);

	useEffect(() => {
		if (gameId && hostReady) {
			navigate(`/game/${gameId}`);
		}
	}, [hostReady, gameId, navigate]);

	return (
		<div>
			<h2>Join a game</h2>

			{!hasJoinedGame && (
				<>
					<input type="text" value={gameId} onChange={handleChange} />
					<button onClick={handleJoinClick}>Join</button>
				</>
			)}

			{hasJoinedGame && !hostReady && (
				<p>waiting for host to start the game...</p>
			)}
		</div>
	);
};

export default Join;
