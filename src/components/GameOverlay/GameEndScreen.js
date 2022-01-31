import { useContext } from "react";
import { SocketContext } from "../../services/socket";
import { StoreContext } from "../../store";
import styled from "styled-components";
import { START_GAME } from "../../constants";

const GameEndScreen = () => {
	const socket = useContext(SocketContext);
	const {
		currentGameId: [currentGameId],
		myId: [myId],
		winner: [winner],
		isHost: [isHost],
	} = useContext(StoreContext);

	const handleReadyClick = () => {
		socket.emit(START_GAME, currentGameId);
	};

	return (
		<Container>
			<h1 className="styled-heading">
				You {winner === myId ? "won!" : "lost!"}
			</h1>
			{isHost ? (
				<>
					<Text>Play another round?</Text>
					<Button onClick={handleReadyClick}>Start a new game</Button>
				</>
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

const Text = styled.p`
	margin: 0;
	text-shadow: var(--hud-text-shadow);
`;

const Button = styled.button`
	margin-top: 2rem;
`;

export default GameEndScreen;
