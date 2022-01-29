import { useContext } from "react";
import { SocketContext } from "../../services/socket";
import { StoreContext } from "../../store";
import styled from "styled-components";

const GameEndScreen = () => {
	const socket = useContext(SocketContext);
	const {
		currentGameId: [currentGameId],
		myId: [myId],
		winner: [winner],
		isHost: [isHost],
	} = useContext(StoreContext);

	const handleReadyClick = () => {
		socket.emit("startGame", currentGameId);
	};

	return (
		<Container>
			<Heading>You {winner === myId ? "won!" : "lost!"}</Heading>
			{isHost ? (
				<button onClick={handleReadyClick}>Start a new game</button>
			) : (
				<Text>Waiting for host to start a new game...</Text>
			)}
		</Container>
	);
};

const Container = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	z-index: 1000;
	background: var(--hud-background);
	box-shadow: var(--hud-box-shadow);
	border-radius: 5px;
	padding: 2rem 3rem;
	text-align: center;
`;

const Heading = styled.h2`
	text-transform: uppercase;
	font-size: 2rem;
	margin: 0 0 1rem 0;
	text-shadow: var(--hud-text-shadow);
`;

const Text = styled.p`
	margin: 0;
	text-shadow: var(--hud-text-shadow);
`;

export default GameEndScreen;
