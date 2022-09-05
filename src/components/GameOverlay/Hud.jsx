import { useContext } from "react";
import styled, { css } from "styled-components";
import { StoreContext } from "../../store";
import { ReactComponent as ArrowIcon } from "../../icons/caret-right-solid.svg";

const Hud = () => {
	const {
		isMyTurn: [isMyTurn],
		winner: [winner],
	} = useContext(StoreContext);

	return (
		<StyledHud>
			<Orb isYou={true} isActive={isMyTurn && !winner} />
			<PlayerTab isActive={isMyTurn && !winner} position="left">
				<span>You</span>
			</PlayerTab>
			{!winner && (
				<StyledArrowIcon direction={isMyTurn ? "left" : "right"} />
			)}
			<PlayerTab isActive={!isMyTurn && !winner} position="right">
				<span>Opponent</span>
			</PlayerTab>
			<Orb isActive={!isMyTurn && !winner} />
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

const Orb = styled.div`
	position: absolute;
	right: -10px;
	top: 50%;
	width: 20px;
	height: 20px;
	transform: translateY(-50%);
	background: radial-gradient(#588bdf, #6522e3);
	border-radius: 1000px;
	border: 3px solid #080808;
	transition: all 0.25s;

	&:after {
		content: "";
		position: absolute;
		top: 3px;
		left: 50%;
		transform: translateX(-50%);
		width: 8px;
		height: 8px;
		border-radius: 100px;
		background-color: #fff;
		background: radial-gradient(#fff, rgb(255 255 255 / 0%));
		opacity: 0;
		transition: opacity 0.25s;
	}

	${({ isYou }) =>
		isYou &&
		css`
			left: -10px;
			right: auto;
			background: radial-gradient(#e8c062, #ef352e);
		`}

	${({ isActive }) =>
		isActive &&
		css`
			right: -14px;
			width: 28px;
			height: 28px;

			&:after {
				opacity: 0.75;
			}
		`}

		${({ isYou, isActive }) =>
		isYou &&
		isActive &&
		css`
			left: -14px;
		`}
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
		isActive
			? "3px solid var(--color-light-green)"
			: "3px solid transparent"};
	padding: 0 1.25rem;
	min-width: 120px;
	height: 50px;
	border-radius: ${({ position }) =>
		position === "left" ? "0 0 0 5px" : "0 0 5px 0"};
	border-right: ${({ position }) =>
		position === "left" ? "1px solid rgb(27 36 52 / 100%)" : "0"};
	border-left: ${({ position }) =>
		position === "right" ? "1px solid rgb(27 36 52 / 100%)" : "0"};
	transition: all 0.3s;
	box-shadow: 0 0 50px rgb(8 181 8 / 15%);

	@media (min-width: 600px) {
		min-width: 150px;
	}

	span {
		font-weight: var(--heading-font-weight);
		text-shadow: var(--hud-text-shadow);
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
