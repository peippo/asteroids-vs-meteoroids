import styled from "styled-components";
import useGameEnd from "../../hooks/useGameEnd";

const GameEndScreen = () => {
	const [isWinner, isHost, handleRestartClick] = useGameEnd();

	return (
		<Container>
			<h1 className="styled-heading">You {isWinner ? "won!" : "lost!"}</h1>
			{isHost ? (
				<>
					<Text>Play another round?</Text>
					<Button onClick={handleRestartClick}>Start a new game</Button>
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
