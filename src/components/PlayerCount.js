import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { SocketContext } from "../services/socket";
import { ReactComponent as PlayerIcon } from "../icons/user-robot-solid.svg";

const PlayerCount = () => {
	const socket = useContext(SocketContext);
	const [playerCount, setPlayerCount] = useState(1);

	useEffect(() => {
		if (!socket) return;

		const playersOnlineListener = (playerCount) => {
			setPlayerCount(playerCount);
		};

		socket.on("playersOnline", playersOnlineListener);

		return () => {
			socket.off("playersOnline", playersOnlineListener);
		};
	}, [socket, setPlayerCount]);

	return (
		<Wrapper>
			<StyledPlayerIcon />
			<Count>
				{playerCount} <Tooltip>Players online</Tooltip>
			</Count>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: absolute;
	bottom: 10px;
	left: 10px;
	display: flex;
	z-index: 1;

	&:hover span {
		transition-delay: 0.25s;
		width: auto;
		height: auto;
		clip: initial;
		opacity: 1;
		visibility: visible;
	}
`;

const StyledPlayerIcon = styled(PlayerIcon)`
	width: 32px;
`;

const Tooltip = styled.span`
	position: absolute;
	font-size: 16px;
	width: 1px;
	height: 1px;
	padding: 0;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border: 0;
	background: var(--hud-background);
	color: var(--color-white);
	line-height: normal;
	top: 40%;
	transform: translateY(-50%);
	left: calc(100% + 5px);
	padding: 0.5rem 1rem;
	border-radius: 4px;
	display: inline-block;
	opacity: 0;
	visibility: hidden;
	transition: 0.25s;

	&::before {
		content: "";
		right: 100%;
		top: 50%;
		transform: translateY(-50%);
		position: absolute;
		z-index: 1;
		width: 0;
		height: 0;
		border-top: 10px solid transparent;
		border-bottom: 10px solid transparent;
		border-left: 10px solid transparent;
		border-right: 10px solid rgb(37 46 72 / 80%);
	}
`;

const Count = styled.div`
	margin: 0 0 0 0.25rem;
	font-weight: var(--heading-font-weight);
	font-size: 1.25rem;
	width: 30px;
	height: 30px;
	color: #000;
	border-radius: 1000px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--color-light-green);
	pointer-events: none;
`;

export default PlayerCount;
