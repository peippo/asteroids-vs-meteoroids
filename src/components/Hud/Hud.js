import { useContext } from "react";
import styled, { css } from "styled-components";
import { StoreContext } from "../../store";
import { ReactComponent as ArrowIcon } from "../../icons/caret-right-solid.svg";

const Hud = () => {
	const {
		isMyTurn: [isMyTurn],
	} = useContext(StoreContext);

	return (
		<StyledHud>
			<PlayerTab isActive={isMyTurn} position="left">
				<span>You</span>
			</PlayerTab>
			<StyledArrowIcon direction={isMyTurn ? "left" : "right"} />
			<PlayerTab isActive={!isMyTurn} position="right">
				<span>Opponent</span>
			</PlayerTab>
		</StyledHud>
	);
};

const StyledHud = styled.header`
	display: flex;
	position: absolute;
	top: 10px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 1;
	background: var(--hud-background);
	box-shadow: var(--hud-box-shadow);
	border-radius: 5px;
`;

const PlayerTab = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${({ isActive }) =>
		isActive
			? "linear-gradient(to top, rgb(0 100 0 / 40%), rgb(0 100 0 / 0%) 80%)"
			: "transparent"};
	border-bottom: ${({ isActive }) =>
		isActive ? "3px solid var(--color-green)" : "3px solid transparent"};
	padding: 0 1.25rem;
	min-width: 150px;
	height: 50px;
	border-radius: ${({ position }) =>
		position === "left" ? "0 0 0 5px" : "0 0 5px 0"};
	border-right: ${({ position }) =>
		position === "left" ? "1px solid rgb(27 36 52 / 100%)" : "0"};
	border-left: ${({ position }) =>
		position === "right" ? "1px solid rgb(27 36 52 / 100%)" : "0"};
	transition: all 0.3s;
	box-shadow: 0 0 50px rgb(8 181 8 / 15%);

	span {
		font-weight: 700;
		text-shadow: 0 2px 2px rgb(0 0 0 / 50%);
		pointer-events: none;
	}

	${({ isActive }) =>
		!isActive &&
		css`
			span {
				opacity: 0.3;
			}
		`}
`;

const StyledArrowIcon = styled(ArrowIcon)`
	position: absolute;
	height: 40px;
	top: 50%;
	left: 50%;
	transform: ${({ direction }) =>
		`translateX(${
			direction === "left" ? "-90%" : "-10%"
		}) translateY(-50%) rotate(${direction === "left" ? "-180deg" : "0"})`};
	transition: transform 0.15s;
`;

export default Hud;
