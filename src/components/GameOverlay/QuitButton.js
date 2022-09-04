import styled from "styled-components";
import useQuitSession from "../../hooks/useQuitSession";
import { ReactComponent as QuitIcon } from "../../icons/times-octagon-solid.svg";
import Tooltip from "../Tooltip";

const QuitButton = () => {
	const quitSession = useQuitSession();

	return (
		<StyledButton onClick={() => quitSession()}>
			<StyledQuitIcon />
			<Tooltip>Quit game</Tooltip>
		</StyledButton>
	);
};

const StyledButton = styled.button`
	position: absolute;
	top: 10px;
	left: 10px;
	z-index: 1;
	padding: 0;
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		span {
			transition-delay: 0.25s;
			width: auto;
			height: auto;
			clip: initial;
			opacity: 1;
			visibility: visible;
		}
	}
`;

const StyledQuitIcon = styled(QuitIcon)`
	width: 24px;
	color: var(--color-white);
	transition: color 0.25s;
`;

export default QuitButton;
