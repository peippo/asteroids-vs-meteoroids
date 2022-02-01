import styled from "styled-components";
import useGameEnd from "../../hooks/useGameEnd";
import Modal from "../Modal";

const GameEndScreen = () => {
	const [isWinner, isHost, handleRestartClick] = useGameEnd();

	return (
		<Modal>
			<h1 className="styled-heading">You {isWinner ? "won!" : "lost!"}</h1>
			{isHost ? (
				<>
					<Text>Play another round?</Text>
					<Button onClick={handleRestartClick}>Start a new game</Button>
				</>
			) : (
				<Text>Waiting for host to start a new game...</Text>
			)}
		</Modal>
	);
};

const Text = styled.p`
	margin: 0;
	text-shadow: var(--hud-text-shadow);
`;

const Button = styled.button`
	margin-top: 2rem;
`;

export default GameEndScreen;
