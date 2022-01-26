import { useContext, useState, useEffect } from "react";
import { SocketContext } from "../../services/socket";
import { StoreContext } from "../../store";
import { useNavigate } from "react-router-dom";

const Join = () => {
	const navigate = useNavigate();
	const socket = useContext(SocketContext);
	const {
		gameId: [gameId, setGameId],
		userId: [, setUserId],
	} = useContext(StoreContext);

	const [hasJoinedGame, setHasJoinedGame] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [hostReady, setHostReady] = useState(false);
	const [inputValue, setInputValue] = useState("");

	const handleChange = (event) => {
		setHasError(false);
		setInputValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		socket.emit("joinGame", inputValue.toString());
	};

	useEffect(() => {
		if (!socket) return;

		const hostReadyListener = () => {
			setHostReady(true);
		};

		const gameNotFoundListener = () => {
			setHasError(true);
		};

		const joinedGameListener = (gameInfo) => {
			setGameId(gameInfo.gameId);
			setUserId(gameInfo.userId);
			setHasJoinedGame(true);
		};

		socket.on("joinedGame", joinedGameListener);
		socket.on("hostReady", hostReadyListener);
		socket.on("gameNotFound", gameNotFoundListener);

		return () => {
			socket.off("joinedGame", joinedGameListener);
			socket.off("hostReady", hostReadyListener);
			socket.off("gameNotFound", gameNotFoundListener);
		};
	}, [socket, setGameId, setUserId]);

	useEffect(() => {
		if (gameId && hostReady) {
			navigate(`/game/${gameId}`);
		}
	}, [hostReady, gameId, navigate]);

	return (
		<div>
			<h1>Join a game</h1>

			{!hasJoinedGame && (
				<form onSubmit={handleSubmit}>
					<input type="text" value={inputValue} onChange={handleChange} />
					<button type="submit">Join</button>
				</form>
			)}

			{hasJoinedGame && !hostReady && (
				<>
					<h2>Joined game {gameId} succesfully</h2>
					<p>waiting for host to start the game...</p>
				</>
			)}

			{hasError && (
				<>
					<h2>Error joining game!</h2>
				</>
			)}
		</div>
	);
};

export default Join;
