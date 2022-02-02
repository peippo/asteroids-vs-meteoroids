import styled from "styled-components";
import usePlayerCount from "../hooks/usePlayerCount";
import { ReactComponent as PlayerIcon } from "../icons/user-robot-solid.svg";
import Tooltip from "./Tooltip";

const PlayerCount = () => {
	const playerCount = usePlayerCount();

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
	height: 40px;
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
