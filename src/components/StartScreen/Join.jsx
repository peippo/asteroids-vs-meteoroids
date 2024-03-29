import styled from "styled-components";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import useJoin from "../../hooks/useJoin";
import Modal from "../Modal";
import { ReactComponent as SuccessIcon } from "../../icons/check-circle-solid.svg";
import { ReactComponent as ErrorIcon } from "../../icons/times-circle-solid.svg";
import BackButton from "./BackButton";

const Join = () => {
	const [
		currentGameId,
		joinGame,
		hasJoinedGame,
		hostReady,
		hasError,
		setHasError,
	] = useJoin();
	const [, setLocation] = useLocation();

	const [inputValue, setInputValue] = useState("");

	const handleChange = (event) => {
		setHasError(false);
		setInputValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		joinGame(inputValue.toString());
	};

	useEffect(() => {
		if (currentGameId && hostReady) {
			setLocation(`/game/${currentGameId}`);
		}
	}, [hostReady, currentGameId, setLocation]);

	return (
		<Modal>
			<h1 className="styled-heading">Join a game</h1>

			{!hasJoinedGame && (
				<>
					<Text>
						Enter a valid <strong>Game ID</strong> to join a game
					</Text>
					<Form onSubmit={handleSubmit}>
						<InputWrapper>
							<label htmlFor="game-id-input">Game ID</label>
							<Input
								id="game-id-input"
								type="number"
								pattern="[0-9]*"
								inputMode="numeric"
								placeholder="00000"
								value={inputValue}
								onChange={handleChange}
							/>
						</InputWrapper>
						<button disabled={inputValue.length < 5} type="submit">
							Join
						</button>
					</Form>
				</>
			)}

			{hasJoinedGame && !hostReady && (
				<>
					<IconWrapper>
						<StyledSuccessIcon />
						<SubHeading>Joined game {currentGameId}</SubHeading>
					</IconWrapper>
					<Text>Waiting for host to start the game...</Text>
				</>
			)}

			{hasError && (
				<>
					<ErrorText>
						<IconWrapper>
							<StyledErrorIcon />
							<SubHeading>Error joining game</SubHeading>
						</IconWrapper>
						Host left or someone else already joined.
					</ErrorText>
				</>
			)}

			<BackButton />
		</Modal>
	);
};

const Form = styled.form`
	display: flex;
	flex-direction: column;
	margin-top: 1rem;
`;

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const Input = styled.input`
	margin-bottom: 1rem;
	width: 100%;
`;

const SubHeading = styled.h2`
	text-transform: none;
	margin-bottom: 0;
`;

const Text = styled.p`
	margin-bottom: 0;
`;

const ErrorText = styled.p`
	color: var(--color-red);
	font-size: 1rem;
	margin: 2rem 0 0 0;
`;

const IconWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.75rem;
`;

const StyledSuccessIcon = styled(SuccessIcon)`
	width: 28px;
	color: var(--color-light-green);
`;

const StyledErrorIcon = styled(ErrorIcon)`
	width: 28px;
`;

export default Join;
